import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "@store";
import { setIsLoading } from "@store/loading";

import { api } from "@shared/services";
import { TypeOfGame } from "@shared/types";

type GamesApiData = {
  "min-cart-value": number;
  types: TypeOfGame[];
};

export const fetchGamesData = createAsyncThunk<
  GamesApiData,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("@games/fetchGamesData", async (_, thunkApi) => {
  thunkApi.dispatch(setIsLoading(true));
  const { data } = await api.get<GamesApiData>("games.json");
  thunkApi.dispatch(setIsLoading(false));
  return data;
});
