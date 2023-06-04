import { combineReducers } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsDBReducer } from './contactsDB/contactsDB';

export const reducer = combineReducers({
  // contactsCombine: contactsReducer,
  contactsDBCombine: contactsDBReducer,
  filterCombine: filterReducer,
});

// вариант
// export const reducer = {
//   contacts: contactsReducer,
// };
