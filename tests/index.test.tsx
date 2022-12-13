import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Home from '../pages';
import { recipes } from './recipes';
import { useAppContext } from '../contexts/state';

describe('Home', () => {
  it('renders the little text', () => {
    render(<Home recipes={[]} />);

    const paragraph = screen.queryByText(
      'You cannot wait to cook ? Choose 2 recipes from this list !'
    );

    expect(paragraph).toBeInTheDocument();
  });

  it('when one recipe selected, cannot continue', async () => {
    const user = userEvent.setup();

    render(<Home recipes={recipes} />);

    const recipe = screen.getByText(recipes[0].title);

    await user.click(recipe);

    const confirmBtn = screen.getByRole('button', { name: 'Continue' });
    expect(confirmBtn).toBeInTheDocument();
  });
});
