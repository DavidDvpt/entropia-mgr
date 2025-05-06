// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Ajoute ici tes reducers quand tu en as
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Typage standard
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
