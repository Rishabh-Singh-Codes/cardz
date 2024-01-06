import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Catalogue from '../pages/Catalogue';

test('renders History component with title', () => {
  render(
    <BrowserRouter>
      <Catalogue />
    </BrowserRouter>
  );
  const titleElement = screen.getByText("Catalogue");
  expect(titleElement).toBeInTheDocument();
});
