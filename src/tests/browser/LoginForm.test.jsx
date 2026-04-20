import { render } from 'vitest-browser-react';
import { describe, it, expect, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router';
import LoginForm from '../../components/LoginForm';
import { handleLoginUser } from '../../actions/authedUser';

vi.mock('../../actions/authedUser', async () => {
  const actual = await vi.importActual('../../actions/authedUser');

  return {
    ...actual,
    handleLoginUser: vi.fn(),
  };
});

describe('LoginForm', () => {
  it('Will display an alert if login fails', async () => {
    // Set up spy and mock implementation to prevent blocking
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const expectedAlertMessage = 'Login failed: Invalid username or password.';

    handleLoginUser.mockReturnValue(false);

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

    // Assert the alert was called
    expect(alertMock).toHaveBeenCalledWith(expectedAlertMessage);

    // Clean up the spy
    alertMock.mockRestore();
  });
});
