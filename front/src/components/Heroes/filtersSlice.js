import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterStatus: "all",
  heroesFilteredBySide: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    heroesFilteredBySide: (state, action) => { state.filterStatus = action.payload }
  }
});

const { actions, reducer } = filtersSlice;
export const { heroesFilteredBySide } = actions;

export default reducer;