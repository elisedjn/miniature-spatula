import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Confirmation from '../pages/confirmation';

describe('Confirmation', () => {
  it('renders the thank you', () => {
    render(<Confirmation />);

    const heading = screen.getByRole('heading', {
      name: /Thank you!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the text', () => {
    render(<Confirmation />);

    const paragraph = screen.queryByText('We have registered your recipes.');

    expect(paragraph).toBeInTheDocument();
  });
});
