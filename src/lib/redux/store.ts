// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import apiMiddlewares from './apiMiddlewares';
import reducers from './rootReducer';

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares),
});

// Typage standard
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
