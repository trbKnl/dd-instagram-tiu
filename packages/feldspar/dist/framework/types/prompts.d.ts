import { PropsUIRadioItem, Text } from './elements';
export type PropsUIPrompt = PropsUIPromptFileInput | PropsUIPromptProgress | PropsUIPromptRadioInput | PropsUIPromptConsentForm | PropsUIPromptConfirm | PropsUIPromptText;
export declare function isPropsUIPrompt(arg: any): arg is PropsUIPrompt;
export interface PropsUIPromptConfirm {
    __type__: 'PropsUIPromptConfirm';
    text: Text;
    ok: Text;
    cancel: Text;
}
export declare function isPropsUIPromptConfirm(arg: any): arg is PropsUIPromptConfirm;
export interface PropsUIPromptFileInput {
    __type__: 'PropsUIPromptFileInput';
    description: Text;
    extensions: string;
}
export declare function isPropsUIPromptFileInput(arg: any): arg is PropsUIPromptFileInput;
export interface PropsUIPromptProgress {
    __type__: 'PropsUIPromptProgress';
    description: Text;
    message: string;
    percentage?: number;
}
export declare function isPropsUIPromptProgress(arg: any): arg is PropsUIPromptProgress;
export interface PropsUIPromptRadioInput {
    __type__: 'PropsUIPromptRadioInput';
    title: Text;
    description: Text;
    items: PropsUIRadioItem[];
}
export declare function isPropsUIPromptRadioInput(arg: any): arg is PropsUIPromptRadioInput;
export interface PropsUIPromptConsentForm {
    __type__: 'PropsUIPromptConsentForm';
    description?: Text;
    donateQuestion?: Text;
    donateButton?: Text;
    tables: PropsUIPromptConsentFormTable[];
}
export declare function isPropsUIPromptConsentForm(arg: any): arg is PropsUIPromptConsentForm;
export interface PropsUIPromptConsentFormTable {
    __type__: 'PropsUIPromptConsentFormTable';
    id: string;
    number: number;
    title: Text;
    description: Text;
    data_frame: any;
    headers?: Record<string, Text>;
}
export declare function isPropsUIPromptConsentFormTable(arg: any): arg is PropsUIPromptConsentFormTable;
export interface PropsUIPromptText {
    __type__: 'PropsUIPromptText';
    text: Text;
    title?: Text;
}
export declare function isPropsUIPromptText(arg: any): arg is PropsUIPromptText;
export interface PropsUIDataSubmissionButtons {
    __type__: 'PropsUIDataSubmissionButtons';
    donateQuestion?: Text;
    donateButton?: Text;
    onDonate: () => void;
    onCancel: () => void;
    waiting: boolean;
}
export declare function isPropsUIDataSubmissionButtons(arg: any): arg is PropsUIDataSubmissionButtons;
