import React from "react";
import { PageFactory } from "../framework/visualization/react/factories/base";
export interface ScriptHostProps {
    workerUrl: string;
    locale?: string;
    standalone?: boolean;
    className?: string;
    factories?: PageFactory[];
}
export declare const ScriptHostComponent: React.FC<ScriptHostProps>;
