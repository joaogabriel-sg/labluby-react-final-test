import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth";
import { gamesReducer } from "./games";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    games: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
