import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pizzasAPI } from '../../api/api';

export const fetchPizzas = createAsyncThunk(
  'data/fetchPizzasData',
	async (params, thunkApi) => {
    // не дал передать три параметра, видимо, можно только один. Поэтому пришлось сделать объект с параметрами и передать его. thunkApi - дополнительный функционал. Это объект внутри которого есть диспач (если захотим что-то задиспачить прямо внутри createAsyncThunk), getState(узнать, какой стейт до того, как он изменится и что-то вытащить), requestID (можно сделать прерывание запроса), signal (используется вместе с requestID), rejectWithValue (обработать специфично ошибку, например if(response..data.length === 0 {return thunkAPI.rejectWithValue('пиццы пустые')}))
    const { activeCategory, sortType, pageNumber } = params;
    const response = await axios.get(
      `https://63acc6b1da81ba97618c3d0a.mockapi.io/items?${
        activeCategory === 0 ? '' : `category=${activeCategory}&`
      }sortBy=${sortType.value}&order=${sortType.to}&page=${pageNumber}&limit=4`,
    );

    // pizzasAPI.getPizzas(activeCategory, sortType, pageNumber);
    return response.data;
  },
);

const initialState = {
  pizzas: [],
  status: 'loading', // loading | success | error
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        // сам генерирует ключ на основе fetchPizzas.pending, но можем прописать вручную 'data/fetchPizzasData/pending'
        state.status = 'loading';
        state.pizzas = [];
        console.log('ожидание');
        
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.status = 'success';
        console.log('успех');
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.pizzas = [];
      });
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
