import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { updateAuthenticatedUserData } from ".";

import { User } from "../../types";
import { AppDispatch, RootState } from "..";

export const updateAccountSettings = createAsyncThunk<
  void,
  User,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("@auth/updateAccountSettings", (updatedUser, thunkApi) => {
  const { authenticatedUser } = thunkApi.getState().auth;

  if (!authenticatedUser) return;

  if (authenticatedUser.id !== updatedUser.id) {
    toast.error(
      "Invalid operation because you're trying to update another account!"
    );
    return;
  }

  toast.success("Data saved successfully!");

  if (
    updatedUser.name === authenticatedUser.name &&
    updatedUser.email === authenticatedUser.email &&
    updatedUser.password === authenticatedUser.password
  )
    return;

  thunkApi.dispatch(updateAuthenticatedUserData(updatedUser));
});
