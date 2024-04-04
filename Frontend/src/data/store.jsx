// store.js
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducer'; // Import your root reducer

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Pass the combined reducers to the reducer field
  // Optionally, you can configure middleware, enhancers, and other options here
});

export default store;


