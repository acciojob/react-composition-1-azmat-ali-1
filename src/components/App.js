
import React from "react";
import './../styles/App.css';
import { useState } from 'react';


const App = () => {
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

  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div>
      <h1>Tabs Example</h1>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            style={{ cursor: 'pointer', fontWeight: index === activeTab ? 'bold' : 'normal' }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  )
}

export default App
