// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/authSlice';
import authReducer from './slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
