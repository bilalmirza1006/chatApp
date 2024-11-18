// // src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// // import authReducer from '../features/authSlice';
// import authReducer from './slice/authSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slice/apiSlice';
// import { apiSlice } from './slice/authSlice';

export const store = configureStore({
  reducer: {
    // auth: userDataReduce,  // Add userData slice reducer here
    [apiSlice.reducerPath]: apiSlice.reducer,
    // user: userData, // Add authSlice reducer for user and token

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
