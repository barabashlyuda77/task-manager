import React from 'react';
import classNames from 'classnames';

import Checkbox from '../CheckBox';
import './Item.scss';

const Item = ({ text, checked = false }) => {
  const textClassName = classNames({
    'text': true,
    'text-checked': checked,
  });

  return (
    <div className="item-wrapper">
      <Checkbox checked={checked} />
      <div className={textClassName}>{text}</div>
    </div>
  );
}

export default Item;
