"""
DDP Instagram module

This module contains functions to handle *.jons files contained within an instagram ddp
"""

from pathlib import Path
import logging
import zipfile

import pandas as pd

import port.api.props as props
import port.unzipddp as unzipddp
import port.helpers as eh

from port.validate import (
    DDPCategory,
    StatusCode,
    ValidateInput,
    Language,
    DDPFiletype,
)

logger = logging.getLogger(__name__)

DDP_CATEGORIES = [
    DDPCategory(
        id="json_en",
        ddp_filetype=DDPFiletype.JSON,
        language=Language.EN,
        known_files=[
            "secret_conversations.json",
            "personal_information.json",
            "account_privacy_changes.json",
            "account_based_in.json",
            "recently_deleted_content.json",
            "liked_posts.json",
            "stories.json",
            "profile_photos.json",
            "followers.json",
            "signup_information.json",
            "comments_allowed_from.json",
            "login_activity.json",
            "your_topics.json",
            "camera_information.json",
            "recent_follow_requests.json",
            "devices.json",
            "professional_information.json",
            "follow_requests_you've_received.json",
            "eligibility.json",
            "pending_follow_requests.json",
            "videos_watched.json",
            "ads_interests.json",
            "account_searches.json",
            "following.json",
            "posts_viewed.json",
            "recently_unfollowed_accounts.json",
            "post_comments.json",
            "account_information.json",
            "accounts_you're_not_interested_in.json",
            "use_cross-app_messaging.json",
            "profile_changes.json",
            "reels.json",
        ],
    )
]

STATUS_CODES = [
    StatusCode(id=0, description="Valid DDP", message="Valid DDP"),
    StatusCode(id=1, description="Not a valid DDP", message="Not a valid DDP"),
    StatusCode(id=2, description="Bad zipfile", message="Bad zip"),
]


def validate_zip(zfile: Path) -> ValidateInput:
    """
    Validates the input of an Instagram zipfile

    This function should set and return a validation object
    """

    validation = ValidateInput(STATUS_CODES, DDP_CATEGORIES)

    try:
        paths = []
        with zipfile.ZipFile(zfile, "r") as zf:
            for f in zf.namelist():
                p = Path(f)
                if p.suffix in (".html", ".json"):
                    logger.debug("Found: %s in zip", p.name)
                    paths.append(p.name)

        
        if validation.infer_ddp_category(paths):
            validation.set_status_code_by_id(0)
        else:
            validation.set_status_code_by_id(1)

    except zipfile.BadZipFile:
        validation.set_status_code_by_id(2)

    return validation


def accounts_not_interested_in_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "accounts_you're_not_interested_in.json")
    d = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = d["impressions_history_recs_hidden_authors"] #pyright: ignore
        for item in items:
            data = item.get("string_map_data", {})
            account_name = data.get("Username", {}).get("value", None),

            datapoints.append((
                account_name,
            ))
        out = pd.DataFrame(datapoints, columns=["Account name"]) #pyright: ignore

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out


def ads_viewed_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "ads_viewed.json")
    d = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = d["impressions_history_ads_seen"] #pyright: ignore
        for item in items:
            data = item.get("string_map_data", {})
            account_name = data.get("Author", {}).get("value", None)
            if "Time" in data:
                timestamp = data.get("Time", {}).get("timestamp", "")
            else:
                timestamp = data.get("Tijd", {}).get("timestamp", "")

            datapoints.append((
                account_name,
                eh.epoch_to_iso(timestamp)
            ))
        out = pd.DataFrame(datapoints, columns=["Author of ad", "Date"]) #pyright: ignore
        out = out.sort_values(by="Date", key=eh.sort_isotimestamp_empty_timestamp_last)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out


def posts_viewed_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "posts_viewed.json")
    d = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = d["impressions_history_posts_seen"] #pyright: ignore
        for item in items:
            data = item.get("string_map_data", {})
            account_name = data.get("Author", {}).get("value", None)

            datapoints.append((
                account_name,
            ))
        out = pd.DataFrame(datapoints, columns=["Author"]) #pyright: ignore
        out = out.groupby('Author').size().reset_index(name='Count')
        out = out.sort_values(by="Count", ascending=False).reset_index(drop=True)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out



def posts_not_interested_in_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "posts_you're_not_interested_in.json")
    data = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = data["impressions_history_posts_not_interested"] #pyright: ignore
        for item in items:
            d = eh.dict_denester(item.get("string_list_data"))
            datapoints.append((
                eh.fix_latin1_string(eh.find_item(d, "value")),
                eh.find_item(d, "href"),
                eh.epoch_to_iso(eh.find_item(d, "timestamp"))
            ))
        out = pd.DataFrame(datapoints, columns=["Post", "Link", "Date"]) #pyright: ignore
        out = out.sort_values(by="Date", key=eh.sort_isotimestamp_empty_timestamp_last)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out



def videos_watched_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "videos_watched.json")
    d = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = d["impressions_history_videos_watched"] #pyright: ignore
        for item in items:
            data = item.get("string_map_data", {})
            account_name = data.get("Author", {}).get("value", None)

            datapoints.append((
                account_name,
            ))
        out = pd.DataFrame(datapoints, columns=["Author"]) #pyright: ignore
        out = out.groupby('Author').size().reset_index(name='Count')
        out = out.sort_values(by="Count", ascending=False).reset_index(drop=True)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out


def post_comments_to_df(instagram_zip: str) -> pd.DataFrame:
    """
    You can have 1 to n files of post_comments_<x>.json
    """

    out = pd.DataFrame()
    datapoints = []
    i = 1

    while True:
        b = unzipddp.extract_file_from_zip(instagram_zip, f"post_comments_{i}.json")
        d = unzipddp.read_json_from_bytes(b)

        if not d:
            break

        try:
            for item in d:
                data = item.get("string_map_data", {})
                media_owner = data.get("Media Owner", {}).get("value", "")
                if media_owner != "":
                    datapoints.append((
                        media_owner,
                    ))
            i += 1

        except Exception as e:
            logger.error("Exception caught: %s", e)
            return pd.DataFrame()

    out = pd.DataFrame(datapoints, columns=["Media Owner"]) #pyright: ignore
    out = out.groupby('Media Owner').size().reset_index(name='Count')
    out = out.sort_values(by="Count", ascending=False).reset_index(drop=True)

    return out



def following_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "following.json")
    data = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = data["relationships_following"] # pyright: ignore
        for item in items:
            d = eh.dict_denester(item)
            datapoints.append((
                eh.fix_latin1_string(eh.find_item(d, "value")),
            ))
        out = pd.DataFrame(datapoints, columns=["Account"]) #pyright: ignore

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out



def liked_comments_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "liked_comments.json")
    data = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = data["likes_comment_likes"] #pyright: ignore
        for item in items:
            d = eh.dict_denester(item)
            datapoints.append((
                eh.fix_latin1_string(eh.find_item(d, "title")),
                eh.fix_latin1_string(eh.find_item(d, "value")),
            ))
        out = pd.DataFrame(datapoints, columns=["Account name", "Value"]) #pyright: ignore
        out = out.groupby(['Account name', 'Value']).size().reset_index(name='Count')
        out = out.sort_values(by="Count", ascending=False).reset_index(drop=True)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out


def liked_posts_to_df(instagram_zip: str) -> pd.DataFrame:

    b = unzipddp.extract_file_from_zip(instagram_zip, "liked_posts.json")
    data = unzipddp.read_json_from_bytes(b)

    out = pd.DataFrame()
    datapoints = []

    try:
        items = data["likes_media_likes"] #pyright: ignore
        for item in items:
            d = eh.dict_denester(item)
            datapoints.append((
                eh.fix_latin1_string(eh.find_item(d, "title")),
                eh.fix_latin1_string(eh.find_item(d, "value")),
            ))
        out = pd.DataFrame(datapoints, columns=["Account name", "Value"]) #pyright: ignore
        out = out.groupby(['Account name', 'Value']).size().reset_index(name='Count') #pyright: ignore
        out = out.sort_values(by="Count", ascending=False).reset_index(drop=True)

    except Exception as e:
        logger.error("Exception caught: %s", e)

    return out

