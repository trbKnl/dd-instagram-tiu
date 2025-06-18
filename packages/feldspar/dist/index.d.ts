import React, { JSX } from 'react';
import { Omit } from 'lodash';

interface Table {
    __type__: 'Table';
    id: string;
    title: Text;
    data: any;
}
type Payload = PayloadResolved | PayloadRejected;
type PayloadRejected = PayloadFalse | PayloadError;
interface PayloadFalse {
    __type__: 'PayloadFalse';
    value: false;
}
interface PayloadError {
    __type__: 'PayloadError';
    value: string;
}
type PayloadResolved = PayloadVoid | PayloadTrue | PayloadString | PayloadFile | PayloadJSON;
interface PayloadVoid {
    __type__: 'PayloadVoid';
    value: undefined;
}
interface PayloadTrue {
    __type__: 'PayloadTrue';
    value: true;
}
interface PayloadString {
    __type__: 'PayloadString';
    value: string;
}
interface PayloadFile {
    __type__: 'PayloadFile';
    value: File;
}
interface PayloadJSON {
    __type__: 'PayloadJSON';
    value: string;
}
type CommandSystem = CommandSystemDonate | CommandSystemEvent | CommandSystemExit;
interface CommandSystemEvent {
    __type__: 'CommandSystemEvent';
    name: string;
}
interface CommandSystemExit {
    __type__: 'CommandSystemExit';
    code: number;
    info: string;
}
interface CommandSystemDonate {
    __type__: 'CommandSystemDonate';
    key: string;
    json_string: string;
}

interface ReactFactoryContext {
    locale: string;
    resolve?: (payload: Payload) => void;
}

interface PromptContext extends ReactFactoryContext {
    onDataSubmissionDataChanged: (key: string, value: any) => void;
    onDonate: () => void;
}
interface PromptFactory {
    create: (body: unknown, context: PromptContext) => JSX.Element | null;
}

interface PropsUIPromptConfirm {
    __type__: 'PropsUIPromptConfirm';
    text: Text$1;
    ok: Text$1;
    cancel: Text$1;
}
interface PropsUIPromptFileInput {
    __type__: 'PropsUIPromptFileInput';
    description: Text$1;
    extensions: string;
}
interface PropsUIPromptProgress {
    __type__: 'PropsUIPromptProgress';
    description: Text$1;
    message: string;
    percentage?: number;
}
interface PropsUIPromptRadioInput {
    __type__: 'PropsUIPromptRadioInput';
    title: Text$1;
    description: Text$1;
    items: PropsUIRadioItem[];
}
interface PropsUIPromptConsentForm {
    __type__: 'PropsUIPromptConsentForm';
    description?: Text$1;
    donateQuestion?: Text$1;
    donateButton?: Text$1;
    tables: PropsUIPromptConsentFormTable[];
}
interface PropsUIPromptConsentFormTable {
    __type__: 'PropsUIPromptConsentFormTable';
    id: string;
    number: number;
    title: Text$1;
    description: Text$1;
    data_frame: any;
    headers?: Record<string, Text$1>;
}

interface PropsUITextBodyLarge {
    __type__: 'PropsUITextBodyLarge';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUITextBodySmall {
    __type__: 'PropsUITextBodySmall';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUITextTitle1 {
    __type__: 'PropsUITextTitle1';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUITextTitle2 {
    __type__: 'PropsUITextTitle2';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUITextTitle3 {
    __type__: 'PropsUITextTitle3';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUITextTitle4 {
    __type__: 'PropsUITextTitle4';
    text: string;
    color?: string;
    margin?: string;
}
interface PropsUIButtonPrimary {
    __type__: 'PropsUIButtonPrimary';
    label: string;
    color?: string;
    enabled?: boolean;
    spinning?: boolean;
    onClick: () => void;
}
interface PropsUIButtonLabel {
    __type__: 'PropsUIButtonLabel';
    label: string;
    color?: string;
    onClick: () => void;
}
interface PropsUIRadioItem {
    id: number;
    value: string;
    selected: boolean;
    onSelect: () => void;
}
interface PropsUIHeader {
    __type__: 'PropsUIHeader';
    title: Text$1;
}
type Text$1 = Translatable | string;
interface Translatable {
    translations: {
        [locale: string]: string;
    };
}

type PropsUIPage = PropsUIPageSplashScreen | PropsUIPageDataSubmission | PropsUIPageEnd;
interface PropsUIPageSplashScreen {
    __type__: 'PropsUIPageSplashScreen';
}
interface PropsUIPageDataSubmission {
    __type__: 'PropsUIPageDataSubmission';
    platform: string;
    header: PropsUIHeader;
    body: (PropsUIPromptFileInput | PropsUIPromptProgress | PropsUIPromptConfirm | PropsUIPromptConsentForm | PropsUIPromptRadioInput)[];
    promptFactories?: PromptFactory[];
}
interface PropsUIPageEnd {
    __type__: 'PropsUIPageEnd';
}

interface PageFactory {
    createPage(page: PropsUIPage, context: ReactFactoryContext): JSX.Element | null;
}

interface ScriptHostProps {
    workerUrl: string;
    locale?: string;
    standalone?: boolean;
    className?: string;
    factories?: PageFactory[];
}
declare const ScriptHostComponent: React.FC<ScriptHostProps>;

interface Bridge {
    send: (command: CommandSystem) => void;
}

declare class FakeBridge implements Bridge {
    send(command: CommandSystem): void;
    handleDataSubmission(command: CommandSystemDonate): Promise<void>;
    handleExit(command: CommandSystemExit): void;
}

declare class LiveBridge implements Bridge {
    port: MessagePort;
    static initialized: boolean;
    constructor(port: MessagePort);
    static create(window: Window, callback: (bridge: Bridge, locale: string) => void): void;
    send(command: CommandSystem): void;
    private log;
}

declare class DataSubmissionPageFactory implements PageFactory {
    private promptFactories;
    constructor({ promptFactories, }?: {
        promptFactories?: PromptFactory[];
    });
    createPage(page: PropsUIPage, context: ReactFactoryContext): React.JSX.Element | null;
}

declare class TextBundle implements Translatable {
    translations: {
        [key: string]: string;
    };
    defaultLocale: string;
    add(locale: string, text: string): TextBundle;
    translate(locale: string): string;
    resolve(locale: string): string;
}

declare const Translator: {
    translate: (text: Text$1, locale: string) => string;
};

declare const isInstanceOf: <T>(arg: any, type: string, properties: Array<keyof T>) => arg is T;
type Weak<T> = Omit<T, '__type__'>;

declare const BodyLarge: ({ text, color, margin }: Weak<PropsUITextBodyLarge>) => JSX.Element;
declare const BodySmall: ({ text, color, margin }: Weak<PropsUITextBodySmall>) => JSX.Element;
declare const Title1: ({ text, color, margin }: Weak<PropsUITextTitle1>) => JSX.Element;
declare const Title2: ({ text, color, margin }: Weak<PropsUITextTitle2>) => JSX.Element;
declare const Title3: ({ text, color, margin }: Weak<PropsUITextTitle3>) => JSX.Element;
declare const Title4: ({ text, color, margin }: Weak<PropsUITextTitle4>) => JSX.Element;

declare const PrimaryButton: ({ label, spinning, enabled, color, onClick }: Weak<PropsUIButtonPrimary>) => JSX.Element;
declare const LabelButton: ({ label, color, onClick }: Weak<PropsUIButtonLabel>) => JSX.Element;

export { BodyLarge, BodySmall, type Bridge, DataSubmissionPageFactory, FakeBridge, LabelButton, LiveBridge, PrimaryButton, type PromptFactory, type ReactFactoryContext, ScriptHostComponent, type ScriptHostProps, type Table, Title1, Title2, Title3, Title4, Translator, TextBundle as default, isInstanceOf };
