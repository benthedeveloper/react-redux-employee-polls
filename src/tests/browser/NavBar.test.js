import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import NavBar from '../../components/NavBar';

describe('NavBar', () => {
  it('Will match snapshot', async () => {
    const screen = await render(<NavBar />);
    expect(screen).toMatchSnapshot();
  });
});
