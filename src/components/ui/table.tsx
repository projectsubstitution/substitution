import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="border border-gray-300 p-2">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="border border-gray-300 p-2">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;