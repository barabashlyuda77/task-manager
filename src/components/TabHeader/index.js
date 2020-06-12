import React from 'react';

import './TabHeader.scss';

const TabHeader = ({ activeTab, setActiveTab }) => {

  return (
    <div className="header-wrapper">
      <div className={`tab checklist ${activeTab === 1 ? 'unactive' : ''}`} onClick={() => setActiveTab(0)}>
        <img alt="Checklist" src={`${activeTab === 1 ? 'checklist-unactive.png' : 'checklist.png'}`} className="checklist-img"/>
      </div>
      <div className={`tab done ${activeTab === 0 ? 'unactive' : ''}`} onClick={() => setActiveTab(1)}>
        <img alt="Done" src={`${activeTab === 0 ? 'checkmark-done-gray.png' : 'checkmark-done-active.png'}`} className="checkmark-img"/>
      </div>
    </div>
  );
}

export default TabHeader;
