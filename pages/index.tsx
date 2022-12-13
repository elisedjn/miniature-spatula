import { useState } from 'react';
import FloattingButton from '../components/floatting-button';
import RecipeCard from '../components/recipe-card';
import { Recipe } from '../helpers/types';

type HomeProps = {
  recipes: Recipe[];
};

const Home = ({ recipes }: HomeProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onSelectRecipe = (id: string) => {
    if (selected.includes(id)) {
      setSelected((selec) => selec.filter((rId) => rId != id));
    } else if (selected.length < 2) {
      setSelected((s) => [...s, id]);
    } else {
      console.log('already 2 selected');
    }
  };

  const getFloatingText = () => {
    return selected.length === 0
      ? 'Choose 2 recipes from the list'
      : selected.length === 1
      ? 'One more recipe to pick up!'
      : 'Ready for the next step? ';
  };

  return (
    <div className='p-8'>
      <p className='mb-16 text-xl text-center italic'>
        You cannot wait to cook ? Choose 2 recipes from this list !
      </p>

      <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
        {!!recipes.length &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              selected={selected.includes(recipe.id)}
              onSelectRecipe={onSelectRecipe}
            />
          ))}
      </div>
      <FloattingButton
        text={getFloatingText()}
        disabled={selected.length < 2}
        linkTo='/user-details'
        btnText='Continue'
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://code-challenge-mid.vercel.app/api/recipes');
  const { recipes = [] } = await res.json();

  return {
    props: {
      recipes,
    },
  };
};

export default Home;
