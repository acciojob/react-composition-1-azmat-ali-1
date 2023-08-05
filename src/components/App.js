
import React from "react";
import './../styles/App.css';
import { useState } from 'react';
import tabs from './Tabs';
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

export default App
