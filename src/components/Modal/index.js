import React from 'react';

import './Modal.scss';

const Modal = ({ isOpen, onClose, onSave }) => {
  return isOpen && (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <input className="input-field" />
        <div className="buttons-wrapper">
          <button type="submit" className="button add" onClick={(e) => onSave(e.target.value)}>Add</button>
          <button type="submit" className="button cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
