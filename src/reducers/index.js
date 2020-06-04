import { ADD_ITEM, CHECK_ITEM} from '../actions/index.js';

const initialState = [];

const createItem = (value) => {
  return {
    id: Date.now(),
    text: value,
    checked: false,
  };
}

const checkItem = (state, action) => {
  return state.map(item => {
     if (item.text === action.text) {
       item.checked = !item.checked
     }
     return item;
  })
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, createItem(action.text)];
    case CHECK_ITEM:
      return checkItem(state, action);
    default:
      return state
  }

}

export default globalReducer
