import { CommandHandler } from '../types/modules';
import { Response } from '../types/commands';
export default class WorkerProcessingEngine {
    sessionId: String;
    worker: Worker;
    commandHandler: CommandHandler;
    resolveInitialized: () => void;
    resolveContinue: () => void;
    constructor(sessionId: string, worker: Worker, commandHandler: CommandHandler);
    sendSystemEvent(name: string): void;
    handleEvent(event: any): void;
    start(): void;
    waitForInitialization(): Promise<void>;
    firstRunCycle(): void;
    nextRunCycle(response: Response): void;
    terminate(): void;
    handleRunCycle(command: any): void;
}
