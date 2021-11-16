import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth";
import { cartReducer } from "./cart";
import { gamesReducer } from "./games";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    games: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
