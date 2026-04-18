import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import NavBar from '../../components/NavBar';
import { MemoryRouter } from 'react-router';

describe('NavBar', () => {
  it('Will match snapshot', async () => {
    const screen = await render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
