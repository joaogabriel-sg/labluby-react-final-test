import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { User } from "../../types";

type AuthState = {
  users: User[];
  authenticatedUser: User | null;
  isAuthenticated: boolean;
};

type LoginData = Pick<User, "email" | "password">;

type RegisterData = Omit<User, "id" | "bets">;

const initialState: AuthState = {
  users: [],
  authenticatedUser: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<LoginData>) {
      const { email, password } = payload;
      const existentUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (!existentUser) {
        return;
      }

      state.isAuthenticated = true;
      state.authenticatedUser = existentUser;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.authenticatedUser = null;
    },
    register(state, { payload }: PayloadAction<RegisterData>) {
      const newUser: User = {
        ...payload,
        id: uuidv4(),
        bets: [],
      };

      state.users.push(newUser);
      state.isAuthenticated = true;
      state.authenticatedUser = newUser;
    },
    updateAuthenticatedUserData(state, { payload }: PayloadAction<User>) {
      if (!state.authenticatedUser) return;

      state.authenticatedUser = payload;
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );
    },
  },
});

export const { login, logout, register, updateAuthenticatedUserData } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
