import { JSX } from 'react';
import { Weak } from '../../../../helpers';
import { PropsUIPagination } from '../../../../types/elements';
type Props = Weak<PropsUIPagination> & PaginationContext;
export interface PaginationContext {
    onChange: (page: number) => void;
}
export declare const Pagination: ({ pageCount, page, pageWindowLegSize, onChange }: Props) => JSX.Element;
export {};
