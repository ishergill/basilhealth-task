// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/slices/filterSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});