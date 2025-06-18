import { JSX } from 'react';
import { PropsUITableCard } from '../../../../types/elements';
import { Weak } from '../../../../helpers';
export interface TableCardContext {
    locale: string;
    onDelete: (rowId: string) => void;
}
type Props = Weak<PropsUITableCard> & TableCardContext;
export declare const TableCard: ({ row, headCells, locale, onDelete }: Props) => JSX.Element;
export {};
