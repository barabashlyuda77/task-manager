import React, { useState } from 'react';

import './AddItem.scss';

const AddItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="add-item-wrapper">
      {checked ? (
        <>
          <input className="input-field" />
          <div className="buttons-wrapper">
            <button type="submit" className="button add">Add</button>
            <button type="submit" className="button cancel" onClick={() => setChecked(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <div className="circle" onClick={() => setChecked(true)}>
          <img alt="Plus" src="plus.png" className="plus-mark"/>
        </div>
      )}
    </div>
  );
}

export default AddItem;
