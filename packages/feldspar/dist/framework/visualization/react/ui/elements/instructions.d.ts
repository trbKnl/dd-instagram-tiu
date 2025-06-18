import { ReactFactoryContext } from "../../factory";
import { JSX } from "react";
interface InstructionsProps {
    platform: string;
    locale: string;
}
type Props = InstructionsProps & ReactFactoryContext;
export declare const Instructions: (props: Props) => JSX.Element;
export {};
