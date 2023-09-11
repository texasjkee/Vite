import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../helpers/URL";
import axios from "axios";

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle'
};

export const fetchHeroes = createAsyncThunk(
  'heroes/fetchHeroes',
  async () => {
    const { data } = await axios.get(`${BASE_URL}heroes`)
    return data;
  }
);

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroCreated: (state, action) => { state.heroes.push(action.payload) },
    heroDeleted: (state, action) => {
      state.heroes = state.heroes.filter(hero => hero.name !== action.payload)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroesLoadingStatus = 'idle';
        state.heroes = action.payload;
      })
      .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error' })
      .addDefaultCase(() => { });
  }
});

const { actions, reducer } = heroesSlice;
export const { heroCreated, heroDeleted } = actions;

export default reducer;