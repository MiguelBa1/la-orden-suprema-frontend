import React from 'react'

export type Column<T> = {
  title: string;
  dataIndex?: keyof T;
  key: string;
  render?: (record: T, index: number) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  className?: string;
};

export function Table<T>({ data, columns, className = '' }: TableProps<T>) {
  return (
    <div className={ `overflow-x-auto ${className}` }>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            { columns.map(({ title, key }, columnIndex) => (
              <th
                key={ key }
                scope="col"
                className={ `px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ${columnIndex < columns.length - 1 ? 'border-r' : ''}` }
              >
                { title }
              </th>
            )) }
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          { data.map((record, rowIndex) => (
            <tr key={ rowIndex }>
              { columns.map(({ dataIndex, key, render }, columnIndex) => (
                <td
                  key={ key }
                  className={ `px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 ${columnIndex < columns.length - 1 ? 'border-r' : ''}` }
                >
                  { render ? render(record, rowIndex) : dataIndex ? renderCellValue(record[dataIndex]) : null }
                </td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

function renderCellValue(value: unknown): React.ReactNode {
  if (value === null || value === undefined) {
    return null
  }
  if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return value.toString()
  }
  if (React.isValidElement(value)) {
    return value
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return null
}

