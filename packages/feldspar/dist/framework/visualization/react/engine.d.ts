import { Response, CommandUIRender } from "../../types/commands";
import { PropsUIPage } from "../../types/pages";
import VisualizationFactory from "./factory";
import { JSX } from "react";
export default class ReactEngine {
    factory: VisualizationFactory;
    locale: string;
    private setState?;
    constructor(factory: VisualizationFactory);
    start(container: HTMLElement, locale: string, setState: (state: {
        elements: JSX.Element[];
    }) => void): void;
    render(command: CommandUIRender): Promise<Response>;
    renderPage(props: PropsUIPage): Promise<any>;
    private updateElements;
    terminate(): void;
}
