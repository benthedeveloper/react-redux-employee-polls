import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import middleware from './middleware';

export function setupStore(preloadedState) {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });
}
