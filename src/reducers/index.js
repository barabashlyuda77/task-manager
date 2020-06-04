import { ADD_ITEM} from '../actions/index.js';

const initialState = [];

const createItem = (value) => {
  return {
    id: Date.now(),
    text: value,
    checked: false,
  };
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, createItem(action.text)];
    default:
      return state
  }
}

export default globalReducer
