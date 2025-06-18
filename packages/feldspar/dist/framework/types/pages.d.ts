import { PromptFactory } from '../visualization/react/ui/prompts/factory';
import { PropsUIHeader } from './elements';
import { PropsUIPromptFileInput, PropsUIPromptProgress, PropsUIPromptConfirm, PropsUIPromptConsentForm, PropsUIPromptRadioInput } from './prompts';
export type PropsUIPage = PropsUIPageSplashScreen | PropsUIPageDataSubmission | PropsUIPageEnd;
export declare function isPropsUIPage(arg: any): arg is PropsUIPage;
export interface PropsUIPageSplashScreen {
    __type__: 'PropsUIPageSplashScreen';
}
export interface PropsUIPageDataSubmission {
    __type__: 'PropsUIPageDataSubmission';
    platform: string;
    header: PropsUIHeader;
    body: (PropsUIPromptFileInput | PropsUIPromptProgress | PropsUIPromptConfirm | PropsUIPromptConsentForm | PropsUIPromptRadioInput)[];
    promptFactories?: PromptFactory[];
}
export declare function isPropsUIPageDataSubmission(arg: any): arg is PropsUIPageDataSubmission;
export interface PropsUIPageEnd {
    __type__: 'PropsUIPageEnd';
}
export declare function isPropsUIPageEnd(arg: any): arg is PropsUIPageEnd;
