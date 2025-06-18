import React, { ReactNode } from "react";
import { JSX } from "react";
interface VisualizationState {
    elements: JSX.Element[];
}
interface VisualizationContextType {
    state: VisualizationState;
    setState: (state: VisualizationState) => void;
}
export declare const VisualizationProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useVisualization: () => VisualizationContextType;
export {};
