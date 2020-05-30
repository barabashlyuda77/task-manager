import React from 'react';
import classNames from 'classnames';

import './Checkbox.scss';

const Checkbox = ({ checked }) => {
  const checkmarkClassName = classNames({
    'checkmark-unactive': checked,
    'checkmark-active': checked,
  });
  return (
    <div className="box-wrapper">
      <div className="check-box"></div>
      <img alt="Checked" src="checkmark.png" className={checkmarkClassName}/>
    </div>
  );
}

export default Checkbox;
