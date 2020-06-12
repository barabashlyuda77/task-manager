import React, { useState } from 'react';

import ListWrapper from '../ListWrapper';
import AddItem from '../AddItem';
import TabHeader from '../TabHeader';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import Tab from '../Tab';

const ManagerWrapper = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
      <Tabs>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabContent activeTab={activeTab} >
          <Tab>
            <ListWrapper />
            <AddItem />
          </Tab>
          <Tab>
            <ListWrapper checkedOnly/>
          </Tab>
        </TabContent>
      </Tabs>
  );
}

export default ManagerWrapper;
