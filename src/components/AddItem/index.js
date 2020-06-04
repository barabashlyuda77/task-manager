import React, { useState } from 'react';

import Modal from '../../Modal';
import './AddItem.scss';

const AddItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="add-item-wrapper">
      <div className="circle" onClick={() => setChecked(true)}>
        <img alt="Plus" src="plus.png" className="plus-mark"/>
      </div>
      <Modal
        isOpen={checked}
        onClose={setChecked}
      />
    </div>
  );
}

export default AddItem;
