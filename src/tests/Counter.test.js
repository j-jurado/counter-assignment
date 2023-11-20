import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterNumber = screen.getByTestId("count");
  expect(counterNumber).toHaveTextContent(/0/i);
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"));
  const incNumber = screen.getByTestId("count");
  expect(incNumber).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"));
  const decNumber = screen.getByTestId("count");
  expect(decNumber).toHaveTextContent(/-1/i);
});
