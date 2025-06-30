import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  handleLoggedIn,
  isLoggedIn,
  Logout,
} from "../../../service/auth.service";

// Define the initial state interface
export interface InitialState {
  isLoggedIn: boolean;
  // profile: IEventOwner | null;
}

// Initialize the state using a function
const initializeState = (): InitialState => ({
  isLoggedIn: isLoggedIn() || false,
  // profile: getFromLocalStorageAsParse( ),
});

const initialState = initializeState();

// Create the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      handleLoggedIn(action.payload);
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      Logout();
    },
  },
});

// Export actions and reducer
export const { setIsLoggedIn, setLogOut } = authSlice.actions;
export default authSlice.reducer;
