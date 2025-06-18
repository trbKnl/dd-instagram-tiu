import { CommandSystem, CommandSystemDonate, CommandSystemExit } from './framework/types/commands';
import { Bridge } from './framework/types/modules';
export default class FakeBridge implements Bridge {
    send(command: CommandSystem): void;
    handleDataSubmission(command: CommandSystemDonate): Promise<void>;
    handleExit(command: CommandSystemExit): void;
}
