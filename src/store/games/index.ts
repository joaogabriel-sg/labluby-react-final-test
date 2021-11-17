import { createSlice } from "@reduxjs/toolkit";

import { fetchGamesData } from "./thunks";

import { TypeOfGame } from "@shared/types";

type GamesState = {
  minCartValue: number;
  typeOfGames: TypeOfGame[];
};

const initialState: GamesState = {
  minCartValue: 0,
  typeOfGames: [],
};

const gamesSlice = createSlice({
  name: "@games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGamesData.fulfilled, (state, { payload }) => {
      state.typeOfGames = payload.types;
      state.minCartValue = payload["min-cart-value"];
    });
  },
});

export const gamesReducer = gamesSlice.reducer;
