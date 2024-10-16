// src/components/GenericTable.jsx
import React from 'react';
import { Eye, Trash2 } from 'lucide-react';

const GenericTable = ({ data = [], columns = [], onView, onDelete }) => {
  if (!Array.isArray(data) || data.length === 0 || !Array.isArray(columns) || columns.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-3">
                {column.header}
              </th>
            ))}
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
                  {column.key === 'haveAccess' ? (
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item[column.key] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {String(item[column.key])}
                    </span>
                  ) : (
                    String(item[column.key] ?? '')
                  )}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onView?.(item)}
                  className="font-medium text-blue-600 hover:underline mr-2"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => onDelete?.(item)}
                  className="font-medium text-red-600 hover:underline"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;