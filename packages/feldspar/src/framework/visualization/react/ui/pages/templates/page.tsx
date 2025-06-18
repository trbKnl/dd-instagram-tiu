import React from "react";
import { JSX } from "react";

interface PageProps {
  body: JSX.Element;
}

export const Page = (props: PageProps): JSX.Element => {
  return <div className="w-full h-full">{props.body}</div>;
};
