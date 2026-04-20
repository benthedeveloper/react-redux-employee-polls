import { render } from 'vitest-browser-react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Leaderboard from '../../components/Leaderboard';
import { handleGetUsers } from '../../actions/users';
import { handleGetQuestions } from '../../actions/questions';
import { handleLoginUser } from '../../actions/authedUser';
import { createStore } from '@reduxjs/toolkit';
import reducer from '../../reducers';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from '@reduxjs/toolkit';

describe('Leaderboard', () => {
  let testStore = {};

  beforeEach(async () => {
    // Create a testMiddleware without logger for testing
    const testMiddleware = applyMiddleware(thunk);
    // Create a test store
    testStore = createStore(reducer, testMiddleware);
    // Populate testStore with users, questions, and set authedUser
    const validUsername = 'sarahedo';
    const validPassword = 'password123';
    await testStore.dispatch(handleGetUsers());
    await testStore.dispatch(handleGetQuestions());
    await testStore.dispatch(handleLoginUser(validUsername, validPassword));
  });

  it('Will render a heading and an ordered list', async () => {
    const screen = await render(
      <Provider store={testStore}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>,
    );

    const heading = await screen.getByRole('heading');
    const list = await screen.getByTestId('leaderboard-list');

    await expect(heading).toBeInTheDocument();
    await expect(list).toBeInTheDocument();
  });

  it('Will render avatar, name, and number of polls created and polls answered', async () => {
      testStore.getState();
    const expectedNumItems = 4;

    const screen = await render(
      <Provider store={testStore}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>,
    );

    const listItems = await screen
      .getByTestId('leaderboard-list')
      .getByRole('listitem')
      .elements();

    // Check number of items
    await expect(listItems.length).toEqual(expectedNumItems);

    const firstItem = listItems[0];
    const avatarImg = firstItem.querySelector('img');
    const name = firstItem.querySelector('img + span');
    const numPollsCreated = Number(firstItem.querySelector('.num-polls-created').textContent);
    const numPollsAnswered = Number(firstItem.querySelector('.num-polls-answered').textContent);

    await expect(avatarImg).toBeInTheDocument();
    await expect(name).toBeInTheDocument();
    await expect(numPollsCreated).toEqual(2);
    await expect(numPollsAnswered).toEqual(4);
  });
});
