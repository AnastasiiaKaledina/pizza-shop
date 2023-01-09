import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  sortType: { value: 'rating', to: 'desc' },
  pageNumber: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setFilter: (state, action) => {
      state.activeCategory = Number(action.payload.activeCategory);
      state.pageNumber = Number(action.payload.pageNumber);
      state.sortType = { value: action.payload.sortType, to: action.payload.order };
    },
  },
});

// селекторы, чтобы не повторять (state) => state.filter много раз в useSelector. Это обычная функция
export const filterSelector = (state) => state.filter;

export const { setActiveCategory, setSortType, setPageNumber, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
