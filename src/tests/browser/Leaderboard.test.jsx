import { describe, it, expect } from 'vitest';
import { page } from 'vitest/browser';
import Leaderboard from '../../components/Leaderboard';
import { authenticatedState } from '../fixtures/state';

describe('Leaderboard', () => {
  it('Will render a heading and an ordered list', async () => {
    const screen = await page.renderWithProviders(<Leaderboard />, {
      preloadedState: authenticatedState,
    });

    const heading = await screen.getByRole('heading');
    const list = await screen.getByTestId('leaderboard-list');

    await expect(heading).toBeInTheDocument();
    await expect(list).toBeInTheDocument();
  });

  it('Will render avatar, name, and number of polls created and polls answered', async () => {
    const expectedNumItems = 4;

    const screen = await page.renderWithProviders(<Leaderboard />, {
      preloadedState: authenticatedState,
    });

    const listItems = await screen
      .getByTestId('leaderboard-list')
      .getByRole('listitem')
      .elements();

    // Check number of items
    await expect(listItems.length).toEqual(expectedNumItems);

    const firstItem = listItems[0];
    const avatarImg = firstItem.querySelector('img');
    const name = firstItem.querySelector('img + span');
    const numPollsCreated = Number(
      firstItem.querySelector('.num-polls-created').textContent,
    );
    const numPollsAnswered = Number(
      firstItem.querySelector('.num-polls-answered').textContent,
    );

    await expect(avatarImg).toBeInTheDocument();
    await expect(name).toBeInTheDocument();
    await expect(numPollsCreated).toEqual(2);
    await expect(numPollsAnswered).toEqual(4);
  });
});
