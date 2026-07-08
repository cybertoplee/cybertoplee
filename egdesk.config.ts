/**
 * EGDesk User Data Configuration
 * Generated at: 2026-07-08T07:53:28.644Z
 *
 * This file contains type-safe definitions for your EGDesk tables.
 */

export const EGDESK_CONFIG = {
  apiUrl: 'http://localhost:8080',
  apiKey: '7e708c6b-333b-4442-a13c-6bfe50f3389b',
} as const;

export interface TableDefinition {
  name: string;
  displayName: string;
  description?: string;
  /** Omitted or unknown until synced / counted */
  rowCount?: number;
  columnCount: number;
  columns: string[];
}

export const TABLES = {
  table1: {
    name: 'inquiries',
    displayName: 'Inquiries',
    rowCount: 4,
    columnCount: 6,
    columns: []
  } as TableDefinition,
  table2: {
    name: 'example_table',
    displayName: 'Example Table',
    rowCount: 0,
    columnCount: 3,
    columns: []
  } as TableDefinition
} as const;


// Main table (first table by default)
export const MAIN_TABLE = TABLES.table1;


// Helper to get table by name
export function getTableByName(tableName: string): TableDefinition | undefined {
  return Object.values(TABLES).find(t => t.name === tableName);
}

// Export table names for easy access
export const TABLE_NAMES = {
  table1: 'inquiries',
  table2: 'example_table'
} as const;
