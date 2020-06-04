import React from 'react';

import './Checkbox.scss';

const Checkbox = ({ checked, clickHandler, text }) => {
  return (
    <div className="box-wrapper" onClick={() => clickHandler(text)}>
      <div className="check-box"></div>
      {checked && (
        <img alt="Checked" src="checkmark.png" className="checkmark"/>
      )}
    </div>
  );
}

export default Checkbox;
