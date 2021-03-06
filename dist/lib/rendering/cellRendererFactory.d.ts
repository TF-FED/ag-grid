// Type definitions for tf-ag-grid v13.3.1-4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ICellRenderer, ICellRendererFunc } from "./cellRenderers/iCellRenderer";
export declare class CellRendererFactory {
    static ANIMATE_SLIDE: string;
    static ANIMATE_SHOW_CHANGE: string;
    static GROUP: string;
    private gridOptionsWrapper;
    private expressionService;
    private eventService;
    private cellRendererMap;
    private init();
    addCellRenderer(key: string, cellRenderer: {
        new (): ICellRenderer;
    } | ICellRendererFunc): void;
    getCellRenderer(key: string): {
        new (): ICellRenderer;
    } | ICellRendererFunc;
}
