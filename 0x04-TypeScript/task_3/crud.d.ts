// task_3/js/crud.d.ts

import { RowID, RowElement } from './interface';

// Type declarations for each crud function
declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}

