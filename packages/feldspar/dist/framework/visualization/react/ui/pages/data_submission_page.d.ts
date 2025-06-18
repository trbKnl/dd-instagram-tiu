import { JSX } from "react";
import { Weak } from "../../../../helpers";
import { PropsUIPageDataSubmission } from "../../../../types/pages";
import { ReactFactoryContext } from "../../factory";
type Props = Weak<PropsUIPageDataSubmission> & ReactFactoryContext;
export declare const DataSubmissionPage: (props: Props) => JSX.Element;
export {};
