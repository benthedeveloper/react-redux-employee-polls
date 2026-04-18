import { render } from 'vitest-browser-react';
import { Provider } from 'react-redux';
import { describe, it, expect } from 'vitest';
import { store } from '../../store';
import { MemoryRouter } from 'react-router';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
  it('Will display an alert if login fails', async () => {
    const screen = await render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    // TODO update this
    expect(true).toBe(true);
  });
});