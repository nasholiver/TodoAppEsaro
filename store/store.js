// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    todo: todoSlice,
  },
});

export default store;
