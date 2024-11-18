import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken, setUser } from './userDataSlice';

// Define the API slice
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),

    // signIn : builder.mutation({
    //   query: (data) => ({
    //     url: '/auth/login',
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   }),
    // })

    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onSuccess: (data, { dispatch }) => {
        dispatch(setUser(data.user)); // Assuming response contains 'user' data
        dispatch(setToken(data.token)); // Assuming response contains 'token'
      },
      
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = apiSlice;
