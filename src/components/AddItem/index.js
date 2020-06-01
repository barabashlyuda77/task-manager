import React from 'react';

import './AddItem.scss';

const AddItem = () => {
  return (
    <div className="add-item-wrapper">
      {/* <input className="input-field" />
      <input type="submit" value="Add" className="add"/> */}
      <div className="circle">
        <img alt="Plus" src="plus.png" className="plus-mark"/>
      </div>
    </div>
  );
}

export default AddItem;
