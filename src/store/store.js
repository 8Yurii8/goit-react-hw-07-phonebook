import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './Contacts/phonebookReducer';

export const store = configureStore({
  reducer,
});
