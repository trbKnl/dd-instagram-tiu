import { Bridge } from "./types/modules";
import ReactEngine from "./visualization/react/engine";
import { PageFactory } from "./visualization/react/factories/base";
import CommandRouter from './command_router';
import WorkerProcessingEngine from "./processing/worker_engine";
export default class Assembly {
    processingEngine: WorkerProcessingEngine;
    visualizationEngine: ReactEngine;
    router: CommandRouter;
    constructor(worker: Worker, bridge: Bridge, factories?: PageFactory[]);
}
