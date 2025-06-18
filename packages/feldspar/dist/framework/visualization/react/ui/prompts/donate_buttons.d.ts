import { JSX } from "react";
import { Text } from "../../../../types/elements";
interface Props {
    onDonate: () => void;
    onCancel: () => void;
    locale: string;
    donateQuestion?: Text;
    donateButton?: Text;
}
export declare const DonateButtons: ({ onDonate, onCancel, locale, donateQuestion, donateButton }: Props) => JSX.Element;
export {};
