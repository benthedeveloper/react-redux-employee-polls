import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { setupStore } from './store';

import './index.css';
import App from './App';

const store = setupStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
