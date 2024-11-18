// src/features/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async function for sign-up
export const signUpUser = createAsyncThunk('auth/signUpUser', async (userData, thunkAPI) => {
  const { email, password, firstName, lastName, country, gender, picture } = userData;

  // Simulate API request (Replace with real API call)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ email, firstName, lastName });
      } else {
        reject('Sign up failed. Please try again.');
      }
    }, 1000);
  });
});

// Async function for sign-in
export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (userCredentials, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await axios.post('http://localhost:3001/api/auth/login', userCredentials);
      return response.data; // Assuming the API returns user data
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign up reducers
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      // Sign in reducers
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
