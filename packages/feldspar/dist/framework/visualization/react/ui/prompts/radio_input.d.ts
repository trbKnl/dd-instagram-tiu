import { Weak } from "../../../../helpers";
import { ReactFactoryContext } from "../../factory";
import { PropsUIPromptRadioInput } from "../../../../types/prompts";
import { JSX } from "react";
type Props = Weak<PropsUIPromptRadioInput> & ReactFactoryContext;
export declare const RadioInput: (props: Props) => JSX.Element;
export {};
