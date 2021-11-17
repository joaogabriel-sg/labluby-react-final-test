import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { AppDispatch, RootState } from "@store";
import { updateAuthenticatedUserData } from "@store/auth";

import { User } from "@shared/types";

export const saveCart = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("@cart/saveCart", (_, thunkApi) => {
  const { authenticatedUser } = thunkApi.getState().auth;

  if (!authenticatedUser) return;

  const { cart } = thunkApi.getState().cart;

  const updatedUserData: User = {
    ...authenticatedUser,
    bets: [...cart, ...authenticatedUser.bets],
  };

  thunkApi.dispatch(updateAuthenticatedUserData(updatedUserData));
  toast.success("Bets added to your account!");
});
