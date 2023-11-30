import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { data: undefined },
  reducers: {
    setMovies: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies.data;
export default moviesSlice.reducer;
