import { render } from 'vitest-browser-react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { setupStore } from '../store';

export async function renderWithProviders(ui, extendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    initialEntries = ['/'],
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </Provider>
  );

  const screen = await render(ui, { wrapper: Wrapper, ...renderOptions });
  // Return an object with the store, and the result of rendering
  return {
    store,
    ...screen,
  };
}
