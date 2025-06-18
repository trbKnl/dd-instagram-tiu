import { CommandSystem } from './framework/types/commands';
import { Bridge } from './framework/types/modules';
export declare class LiveBridge implements Bridge {
    port: MessagePort;
    static initialized: boolean;
    constructor(port: MessagePort);
    static create(window: Window, callback: (bridge: Bridge, locale: string) => void): void;
    send(command: CommandSystem): void;
    private log;
}
