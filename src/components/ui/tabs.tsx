import React, { useState } from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
      {label}
    </button>
  );
};

const Tabs: React.FC<{ tabs: string[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="p-4">
        <h2>{activeTab} Content</h2>
      </div>
    </div>
  );
};

export default Tabs;