import React from 'react';

const ScrollArea: React.FC = ({ children }) => {
  return (
    <div className="overflow-auto max-h-64 border border-gray-300 p-2">
      {children}
    </div>
  );
};

export default ScrollArea;