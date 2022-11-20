import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts.Slice';
import { filterReducer } from '../redux/filter.Slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
