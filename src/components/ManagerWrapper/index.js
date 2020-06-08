import React from 'react';

import ListWrapper from '../ListWrapper';
import AddItem from '../AddItem';
import TabHeader from '../TaskHeader';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import Tab from '../Tab';

const ManagerWrapper = () => {
  return (
      <Tabs>
        <TabHeader activeTab={0} />
        <TabContent activeTab={0} >
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
