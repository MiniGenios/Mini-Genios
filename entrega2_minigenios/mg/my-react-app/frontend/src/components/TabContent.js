import React from 'react';

function TabContent({ id, activeTab, children }) {
  return (
    <div id={id} className={`tab-content ${activeTab === id ? 'active' : ''}`}>
      {children}
    </div>
  );
}

export default TabContent;