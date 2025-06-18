import { PropsUIPage } from "../../types/pages";
import { Payload } from "../../types/commands";
import { PageFactory } from "./factories/base";
import { JSX } from "react";
export interface ReactFactoryContext {
    locale: string;
    resolve?: (payload: Payload) => void;
}
export default class ReactFactory {
    private factories;
    constructor(initialFactories?: PageFactory[]);
    createPage(page: PropsUIPage, context: ReactFactoryContext): JSX.Element;
    registerFactory(factory: PageFactory): void;
}
