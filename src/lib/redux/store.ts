// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import reducers from './rootReducer';

function makeStore() {
  return configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}

export { makeStore };
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
