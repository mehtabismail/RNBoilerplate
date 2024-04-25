import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user_data: {},
  role: 'employee',
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.user_data = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: () => ({ ...initialState }),
  },
});

export const { storeToken, setUserData, setRole, logout } =
  authSlice.actions;

export default authSlice.reducer;
