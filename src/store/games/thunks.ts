import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../services";

import { TypeOfGame } from "../../types";

type GamesApiData = {
  "min-cart-value": number;
  types: TypeOfGame[];
};

export const fetchGamesData = createAsyncThunk<GamesApiData>(
  "@games/fetchGamesData",
  async () => {
    const { data } = await api.get<GamesApiData>("games.json");
    return data;
  }
);
