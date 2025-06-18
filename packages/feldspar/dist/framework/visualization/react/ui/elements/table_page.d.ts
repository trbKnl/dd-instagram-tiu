import { JSX } from 'react';
import { PropsUITablePage } from '../../../../types/elements';
import { Weak } from '../../../../helpers';
type Props = Weak<PropsUITablePage> & TableContext;
export interface TableContext {
    id: string;
    edit: boolean;
    selected: string[];
    locale: string;
    onChange: (selected: string[]) => void;
}
export declare const TablePage: ({ head, rows, id, edit, selected, locale, onChange }: Props) => JSX.Element;
export {};
