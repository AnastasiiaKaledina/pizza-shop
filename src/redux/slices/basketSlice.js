import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const findItem = state.pizzas.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.pizzas = [...state.pizzas, action.payload];
      }
      state.totalPrice = state.pizzas.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    deletePizza: (state, action) => {
      state.pizzas = state.pizzas.filter((item) => item.id !== action.payload);
      state.totalPrice = state.pizzas.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    clearBasket: (state) => {
      state.pizzas = [];
      state.totalPrice = 0;
    },
    minusPizza: (state, action) => {
      const findItem = state.pizzas.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.pizzas.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
  },
});

// селектор 
export const currentPizzaSelector = (id) => (state) => state.basket.pizzas.find((item) => item.id === id)

export const { addPizza, clearBasket, deletePizza, minusPizza } = basketSlice.actions;

export default basketSlice.reducer;
