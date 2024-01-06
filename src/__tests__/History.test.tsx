import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import History from '../pages/History';

test('renders History component with title', () => {
  render(
    <BrowserRouter>
      <History />
    </BrowserRouter>
  );
  const titleElement = screen.getByText("History");
  expect(titleElement).toBeInTheDocument();
});
