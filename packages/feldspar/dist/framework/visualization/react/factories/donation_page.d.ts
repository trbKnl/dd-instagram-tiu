import { PropsUIPage } from "../../../types/pages";
import { ReactFactoryContext } from "../factory";
import { PageFactory } from "./base";
import React from "react";
import { PromptFactory } from "../ui/prompts/factory";
export declare class DataSubmissionPageFactory implements PageFactory {
    private promptFactories;
    constructor({ promptFactories, }?: {
        promptFactories?: PromptFactory[];
    });
    createPage(page: PropsUIPage, context: ReactFactoryContext): React.JSX.Element | null;
}
