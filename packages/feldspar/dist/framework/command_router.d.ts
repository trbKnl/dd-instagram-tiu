import { Command, Response, CommandUI, CommandSystem } from './types/commands';
import { CommandHandler, Bridge } from './types/modules';
import ReactEngine from './visualization/react/engine';
export default class CommandRouter implements CommandHandler {
    bridge: Bridge;
    visualizationEngine: ReactEngine;
    constructor(bridge: Bridge, visualizationEngine: ReactEngine);
    onCommand(command: Command): Promise<Response>;
    onCommandSystem(command: CommandSystem, resolve: (response: Response) => void): void;
    onCommandUI(command: CommandUI, resolve: (response: Response) => void): void;
}
