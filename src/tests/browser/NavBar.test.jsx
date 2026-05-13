import { page } from 'vitest/browser';
import { describe, it, expect } from 'vitest';
import NavBar from '../../components/NavBar';

describe('NavBar', () => {
  it('Will match snapshot', async () => {
    const screen = await page.renderWithProviders(<NavBar />);
    expect(screen.container).toMatchSnapshot();
  });

  it('Will render the expected links', async () => {
    const screen = await page.renderWithProviders(<NavBar />);

    const expectedLinks = [
      { text: 'Dashboard', href: '/' },
      { text: 'Leaderboard', href: '/leaderboard' },
      { text: 'New Poll', href: '/add' },
    ];

    const links = await screen.getByRole('link');

    await expect(links.length).toEqual(3);
    for (const [index, expected] of expectedLinks.entries()) {
      const link = links.nth(index);

      await expect.element(link).toHaveTextContent(expected.text);
      await expect.element(link).toHaveAttribute('href', expected.href);
    }
  });
});
