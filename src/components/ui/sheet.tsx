import React from 'react';

interface SheetProps {
  title: string;
  onClose: () => void;
}

const Sheet: React.FC<SheetProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-white shadow-lg p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <button onClick={onClose} className="text-red-500">Close</button>
      <div>{children}</div>
    </div>
  );
};

export default Sheet;