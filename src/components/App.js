
import React from "react";
import './../styles/App.css';
import { useState } from 'react';
const App = () => {
   const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
        {/* Do not remove the main div */}
         <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ cursor: 'pointer', fontWeight: index === activeTab ? 'bold' : 'normal' }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
    </div>
  )
}

const TabsApp = () => {
  const tabs = [
    {
      title: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      title: 'Tab 2',
      content: 'Content for Tab 2',
    },
    {
      title: 'Tab 3',
      content: 'Content for Tab 3',
    },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App
