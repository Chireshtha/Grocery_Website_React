import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('check the code uploaded', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login your credential/i);
  expect(linkElement).toBeInTheDocument();
});
