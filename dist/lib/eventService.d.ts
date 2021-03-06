// Type definitions for tf-ag-grid v13.3.1-4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { LoggerFactory } from "./logger";
import { IEventEmitter } from "./interfaces/iEventEmitter";
import { GridOptionsWrapper } from "./gridOptionsWrapper";
import { AgEvent } from "./events";
export declare class EventService implements IEventEmitter {
    private allSyncListeners;
    private allAsyncListeners;
    private globalSyncListeners;
    private globalAsyncListeners;
    private logger;
    private asyncFunctionsQueue;
    private scheduled;
    private static PRIORITY;
    setBeans(loggerFactory: LoggerFactory, gridOptionsWrapper: GridOptionsWrapper, globalEventListener?: Function): void;
    private getListenerList(eventType, async);
    addEventListener(eventType: string, listener: Function, async?: boolean): void;
    private assertNotDeprecated(eventType);
    addModalPriorityEventListener(eventType: string, listener: Function, async?: boolean): void;
    addGlobalListener(listener: Function, async?: boolean): void;
    removeEventListener(eventType: string, listener: Function, async?: boolean): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(event: AgEvent): void;
    private dispatchToListeners(event, async);
    private dispatchAsync(func);
    private flushAsyncQueue();
}
