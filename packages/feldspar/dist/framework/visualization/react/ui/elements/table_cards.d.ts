import { JSX } from 'react';
import { PropsUITablePage } from '../../../../types/elements';
import { Weak } from '../../../../helpers';
type Props = Weak<PropsUITablePage> & TableContext;
export interface TableContext {
    locale: string;
    onDelete: (rowId: string) => void;
}
export declare const TableCards: ({ head, rows, locale, onDelete }: Props) => JSX.Element;
export {};
