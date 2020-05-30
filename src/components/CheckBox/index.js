import React from 'react';

import './Checkbox.scss';

const Checkbox = ({ checked }) => {
  return (
    <div className="box-wrapper">
      <div className="check-box"></div>
      {checked && (
        <img alt="Checked" src="checkmark.png" className="checkmark"/>
      )}
    </div>
  );
}

export default Checkbox;
