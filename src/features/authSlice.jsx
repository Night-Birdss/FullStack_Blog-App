import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    username: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
    },
    registerSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.data.username;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.username = "";
      state.loading = false;
    },

  },
});

export const {
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
