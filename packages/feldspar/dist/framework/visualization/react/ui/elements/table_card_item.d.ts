import { JSX } from 'react';
import { PropsUITableCardItem } from '../../../../types/elements';
import { Weak } from '../../../../helpers';
type Props = Weak<PropsUITableCardItem> & TableCardItemContext;
export interface TableCardItemContext {
    locale: string;
}
export declare const TableCardItem: ({ title, description, locale }: Props) => JSX.Element;
export {};
