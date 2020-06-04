import { ADD_ITEM} from '../actions/index.js';

const createItem = (value) => {
  return {
    id: Date.now(),
    text: value,
    checked: false,
  };
}

const saveItemsToLocalStorage = (items) => {
  localStorage.setItem('items', JSON.stringify(items));
}

const getItemsFromLocalStorage = () => {
  const localStorageItems = localStorage.getItem('items');
  return localStorageItems === null ? [] : JSON.parse(localStorageItems);
}

const addNewItem = (state, action) => {
  const newState = [...state, createItem(action.text)]
  saveItemsToLocalStorage(newState);
  return newState;
}

const initialState = getItemsFromLocalStorage();

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addNewItem(state, action);
    default:
      return state
  }
}

export default globalReducer
