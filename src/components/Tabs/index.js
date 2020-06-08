import React from 'react';

import './Tabs.scss';

const Tabs = ({ children }) => {
  return (
    <div className="tabs">
      {children}
    </div>
  );
}

export default Tabs;
