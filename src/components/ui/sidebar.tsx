import React from 'react';

const Sidebar: React.FC = ({ children }) => {
  return (
    <div className="w-64 h-full bg-gray-200 p-4">
      {children}
    </div>
  );
};

export default Sidebar;