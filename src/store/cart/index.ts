import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { saveCart } from "./thunks";

import { Bet } from "@shared/types";

type CartState = {
  cart: Bet[];
  totalPrice: number;
};

type AddToCartData = Omit<Bet, "id" | "date">;

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "@cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<AddToCartData>) {
      const bet: Bet = {
        ...payload,
        id: uuidv4(),
        date: new Date().toString(),
      };

      state.cart.push(bet);
      state.totalPrice = state.cart.reduce((acc, bet) => acc + bet.price, 0);
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.cart = state.cart.filter((bet) => bet.id !== payload);
      state.totalPrice = state.cart.reduce((acc, bet) => acc + bet.price, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveCart.fulfilled, (state) => {
      state.cart = [];
      state.totalPrice = 0;
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
