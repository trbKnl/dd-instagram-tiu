import { JSX } from 'react';
import { Weak } from '../../../../helpers';
import { PropsUITable, PropsUITableRow } from '../../../../types/elements';
import { ReactFactoryContext } from '../../factory';
type Props = Weak<PropsUITable> & TableContext & ReactFactoryContext;
export interface TableContext {
    id: string;
    onChange: (rows: PropsUITableRow[], deletedCount: number) => void;
}
export declare const Table: ({ id, head, body, readOnly, locale, onChange }: Props) => JSX.Element;
export {};
