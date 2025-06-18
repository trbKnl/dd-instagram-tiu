import { PropsUIPage } from "../../../types/pages";
import { ReactFactoryContext } from "../factory";
import { PageFactory } from "./base";
import React from "react";
export declare class EndPageFactory implements PageFactory {
    createPage(page: PropsUIPage, context: ReactFactoryContext): React.JSX.Element | null;
}
