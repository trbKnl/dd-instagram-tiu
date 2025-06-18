import { Weak } from "../../../../helpers";
import { PropsUIPageEnd } from "../../../../types/pages";
import { ReactFactoryContext } from "../../factory";
import { JSX } from "react";
type Props = Weak<PropsUIPageEnd> & ReactFactoryContext;
export declare const EndPage: (props: Props) => JSX.Element;
export {};
