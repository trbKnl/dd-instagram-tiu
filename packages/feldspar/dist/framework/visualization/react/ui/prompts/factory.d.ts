import { JSX } from 'react';
import { ReactFactoryContext } from '../../factory';
export interface PromptContext extends ReactFactoryContext {
    onDataSubmissionDataChanged: (key: string, value: any) => void;
    onDonate: () => void;
}
export interface PromptFactory {
    create: (body: unknown, context: PromptContext) => JSX.Element | null;
}
export declare class FileInputFactory implements PromptFactory {
    create(body: unknown, context: ReactFactoryContext): JSX.Element | null;
}
export declare class ProgressFactory implements PromptFactory {
    create(body: unknown, context: ReactFactoryContext): JSX.Element | null;
}
export declare class ConfirmFactory implements PromptFactory {
    create(body: unknown, context: ReactFactoryContext): JSX.Element | null;
}
export declare class RadioInputFactory implements PromptFactory {
    create(body: unknown, context: ReactFactoryContext): JSX.Element | null;
}
export declare class TableFactory implements PromptFactory {
    create(body: unknown, context: PromptContext): JSX.Element | null;
}
export declare class DonateButtonsFactory implements PromptFactory {
    create(body: unknown, context: PromptContext): JSX.Element | null;
}
export declare class TextBlockFactory implements PromptFactory {
    create(body: unknown, context: ReactFactoryContext): JSX.Element | null;
}
export declare const createPromptFactoriesWithDefaults: (factories?: PromptFactory[]) => PromptFactory[];
