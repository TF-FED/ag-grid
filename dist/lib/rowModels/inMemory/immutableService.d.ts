// Type definitions for tf-ag-grid v13.3.1-4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowDataTransaction } from "./inMemoryRowModel";
export declare class ImmutableService {
    private rowModel;
    private gridOptionsWrapper;
    private inMemoryRowModel;
    private postConstruct();
    createTransactionForRowData(data: any[]): RowDataTransaction;
}
