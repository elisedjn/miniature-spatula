import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetails from '../pages/user-details';
import userEvent from '@testing-library/user-event';

describe('User Details', () => {
  it('there is a First Name field', () => {
    render(<UserDetails />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeInTheDocument();
  });
  it('there is an Email field', () => {
    render(<UserDetails />);

    const firstNameInput = screen.getByLabelText(/Email/i);
    expect(firstNameInput).toBeInTheDocument();
  });
});
