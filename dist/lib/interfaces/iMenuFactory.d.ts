// Type definitions for tf-ag-grid v13.3.1-4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
export interface IMenuFactory {
    showMenuAfterButtonClick(column: Column, eventSource: HTMLElement, defaultTab?: string, restrictToTabs?: string[]): void;
    showMenuAfterMouseEvent(column: Column, mouseEvent: MouseEvent | Touch, defaultTab?: string, restrictToTabs?: string[]): void;
    isMenuEnabled(column: Column): boolean;
}
