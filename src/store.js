import { createStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import middleware from './middleware';

export const store = createStore(reducer, middleware);
