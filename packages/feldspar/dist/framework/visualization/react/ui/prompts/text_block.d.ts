import { JSX } from 'react';
import { Weak } from '../../../../helpers';
import { PropsUIPromptText } from '../../../../types/prompts';
import { ReactFactoryContext } from '../../factory';
type Props = Weak<PropsUIPromptText> & ReactFactoryContext;
export declare const TextBlock: (props: Props) => JSX.Element;
export {};
