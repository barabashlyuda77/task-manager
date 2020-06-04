import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import Modal from '../Modal';
import { addItem } from '../../actions';
import './AddItem.scss';

const AddItem = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const addNewItem = (value) => {
    dispatch(addItem(value));
    setChecked(false);
  }

  return (
    <div className="add-item-wrapper">
      <div className="circle" onClick={() => setChecked(true)}>
        <img alt="Plus" src="plus.png" className="plus-mark"/>
      </div>
      <Modal
        isOpen={checked}
        onClose={() => setChecked(false)}
        onSave={addNewItem}
      />
    </div>
  );
}

export default AddItem;
