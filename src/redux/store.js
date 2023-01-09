import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import filterSlice from './slices/filterSlice';
import pizzasSlice from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    pizzas: pizzasSlice,
  },
});
