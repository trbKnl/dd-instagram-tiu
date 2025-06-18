import { JSX } from 'react';
import { Weak } from '../../../../helpers';
import { ReactFactoryContext } from '../../factory';
import { PropsUIPromptProgress } from '../../../../types/prompts';
type Props = Weak<PropsUIPromptProgress> & ReactFactoryContext;
export declare const Progress: (props: Props) => JSX.Element;
export {};
