import { Weak } from '../../../../helpers';
import { ReactFactoryContext } from '../../factory';
import { PropsUIPromptConfirm } from '../../../../types/prompts';
import { JSX } from 'react';
type Props = Weak<PropsUIPromptConfirm> & ReactFactoryContext;
export declare const Confirm: (props: Props) => JSX.Element;
export {};
