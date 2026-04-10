import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { BrowserRouter } from 'react-router';

import './index.css';
import App from './App';

// TODO add middleware
const store = createStore(reducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
