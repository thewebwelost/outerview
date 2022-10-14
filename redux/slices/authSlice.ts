import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  user: {
    username: string | null;
    email: string | null;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: null,
  user: {
    username: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    logout: (state) => {
      state = { ...initialState };
      return state;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
