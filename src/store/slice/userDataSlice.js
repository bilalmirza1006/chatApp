import { createSlice } from '@reduxjs/toolkit';

// Initial state for user and token
const initialState = {
  user: null,
  token: null,
};

const userDataSlice = createSlice({
  name: 'auth', // Slice name
  initialState, // Initial state
  reducers: {
    // Action to set user data in Redux store
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Action to set token data in Redux store
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Action to clear user and token data
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export the action creators for use in components
export const { setUser, setToken, clearAuth } = userDataSlice.actions;

// Export the reducer to be included in the store
export default userDataSlice.reducer;
