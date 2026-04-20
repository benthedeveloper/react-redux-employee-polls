import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import { userEvent } from 'vitest/browser';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
  it('Will display an alert element if login fails', async () => {
    const expectedAlertMessage =
      'Invalid username or password. Please try again.';

    const screen = await render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const usernameInput = await screen.getByLabelText(/username/i);
    const passwordInput = await screen.getByLabelText(/password/i);
    const submitButton = await screen.getByRole('button', { name: /submit/i });

    // Fill out username/password with invalid data then click submit
    await userEvent.type(usernameInput, 'invalidUserName');
    await userEvent.type(passwordInput, 'invalidPassword');
    await userEvent.click(submitButton);

    // Assert the alert element renders
    await expect(screen.getByRole('alert')).toHaveTextContent(expectedAlertMessage);
  });
});
