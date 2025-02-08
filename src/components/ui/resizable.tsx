import React, { useState } from 'react';

const Resizable: React.FC = ({ children }) => {
  const [width, setWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      setWidth(e.clientX);
    }
  };

  return (
    <div
      style={{ width }}
      className="border p-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
      <div
        onMouseDown={handleMouseDown}
        className="w-2 h-full bg-gray-300 cursor-ew-resize"
      />
    </div>
  );
};

export default Resizable;