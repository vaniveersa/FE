import React, { useState } from 'react';

interface TabProps {
  titles: string[];
  children: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({ titles, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-b border-gray-300">
        {titles.map((title, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-semibold ${
              index === activeTab
                ? 'bg-gray-200 text-gray-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="py-4">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;