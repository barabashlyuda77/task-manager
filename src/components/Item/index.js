import React from 'react';
import classNames from 'classnames';
import { useDispatch } from "react-redux";

import { checkItem } from '../../actions';
import Checkbox from '../CheckBox';
import './Item.scss';

const Item = ({ text, checked = false }) => {
  const dispatch = useDispatch();

  const textClassName = classNames({
    'text': true,
    'text-checked': checked,
  });

  const itemChecked = (value) => {
    dispatch(checkItem(value));
  }

  return (
    <div className="item-wrapper">
      <Checkbox checked={checked} clickHandler={itemChecked} text={text} />
      <div className={textClassName}>{text}</div>
    </div>
  );
}

export default Item;
