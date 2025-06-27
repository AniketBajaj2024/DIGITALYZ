"use client";
import { useState } from "react";

export default function DataGrid({ data, onDataChange }) {
  const [editedData, setEditedData] = useState(data);

  const handleChange = (rowIndex, field, value) => {
    const updated = [...editedData];
    updated[rowIndex][field] = value;
    setEditedData(updated);
    onDataChange(updated);
  };

  if (!data || data.length === 0) return <p>No data to display.</p>;

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-auto mt-4 border rounded max-h-[500px]">
      <table className="table-auto w-full text-sm border-collapse">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            {columns.map((col) => (
              <th key={col} className="border px-3 py-2 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {editedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
              {columns.map((col) => (
                <td key={col} className="border px-3 py-2">
                  <input
                    value={row[col]}
                    onChange={(e) => handleChange(rowIndex, col, e.target.value)}
                    className="w-full bg-transparent outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
