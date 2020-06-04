import React from 'react';

import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  return isOpen && (
    <div className="modal-wrapper" onClick={() => onClose(false)}>
      <div className="modal">
        <input className="input-field" />
        <div className="buttons-wrapper">
          <button type="submit" className="button add">Add</button>
          <button type="submit" className="button cancel" onClick={() => onClose(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
