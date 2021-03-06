// Type definitions for tf-ag-grid v13.3.1-4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { OriginalColumnGroupChild } from "./originalColumnGroupChild";
import { ColGroupDef } from "./colDef";
import { Column } from "./column";
import { IEventEmitter } from "../interfaces/iEventEmitter";
export declare class OriginalColumnGroup implements OriginalColumnGroupChild, IEventEmitter {
    static EVENT_EXPANDED_CHANGED: string;
    static EVENT_EXPANDABLE_CHANGED: string;
    private columnApi;
    private gridApi;
    private localEventService;
    private colGroupDef;
    private children;
    private groupId;
    private expandable;
    private expanded;
    private padding;
    constructor(colGroupDef: ColGroupDef, groupId: string, padding: boolean);
    isVisible(): boolean;
    isPadding(): boolean;
    setExpanded(expanded: boolean): void;
    isExpandable(): boolean;
    isExpanded(): boolean;
    getGroupId(): string;
    getId(): string;
    setChildren(children: OriginalColumnGroupChild[]): void;
    getChildren(): OriginalColumnGroupChild[];
    getColGroupDef(): ColGroupDef;
    getLeafColumns(): Column[];
    private addLeafColumns(leafColumns);
    getColumnGroupShow(): string;
    setupExpandable(): void;
    setExpandable(): void;
    private onColumnVisibilityChanged();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
}
