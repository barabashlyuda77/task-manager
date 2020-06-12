import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [newItem, setNewItem] = useState();

  return isOpen && (
    ReactDOM.createPortal(
      <div className="modal-wrapper" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <input className="input-field" onChange={(e) => setNewItem(e.target.value)}/>
          <div className="buttons-wrapper">
            <button type="submit" className="button add" onClick={() => onSave(newItem)}>Add</button>
            <button className="button cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
