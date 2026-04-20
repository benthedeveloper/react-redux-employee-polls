import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import NavBar from '../../components/NavBar';
import { MemoryRouter } from 'react-router';

describe('NavBar', () => {
  it('Will match snapshot', async () => {
    const screen = await render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    expect(screen).toMatchSnapshot();
  });

  it('Will render the expected links', async () => {
    const screen = await render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

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
