import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded p-1">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;