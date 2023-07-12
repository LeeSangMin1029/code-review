import { UserData } from "@/@types/indexed-db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  user: UserData;
  login: boolean;
};

const initialState: StateType = {
  user: {
    email: "",
    language: [],
    mento: false,
    name: "",
    thumbnails: "",
  },
  login: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.login = true;
    },
    logout: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.login = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
