import { PropsUITable, PropsUITableRow } from "../../../../types/elements";
import React from "react";
import { DataSubmissionProvider } from "../../../../types/data_submission";
import { PromptContext } from "./factory";
interface Props {
    table: PropsUITable & {
        number: number;
        title: string;
        description?: string;
        deletedRowCount: number;
    };
    readOnly?: boolean;
    context: PromptContext;
    onChange: (id: string, rows: PropsUITableRow[]) => void;
}
export interface ConsentTableHandle extends DataSubmissionProvider {
}
export declare const ConsentTable: React.ForwardRefExoticComponent<Props & React.RefAttributes<ConsentTableHandle | null>>;
export {};
