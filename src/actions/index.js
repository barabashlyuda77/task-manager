export const ADD_ITEM = 'ADD_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const checkItem = (text) => {
  return {
    type: CHECK_ITEM,
    text
  }
}
