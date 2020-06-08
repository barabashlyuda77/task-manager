import React from 'react';

const TabContent = ({ activeTab, children }) => {
  return (
      <div>
        {children[activeTab]}
      </div>
  );
}

export default TabContent;
