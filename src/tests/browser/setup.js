import { page } from 'vitest/browser';
import { renderWithProviders } from '../../utils/test-utils';

page.extend({
  renderWithProviders,
});
