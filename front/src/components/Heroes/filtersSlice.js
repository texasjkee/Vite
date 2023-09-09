import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterStatus: "all",
  heroesFilteredBySide: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    heroesFilteredBySide: (state, action) => {
      console.log(action)
      filterStatus = action.payload
    }
  }
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { heroesFilteredBySide } = actions;