import Image from 'next/image';
import React from 'react';
import { Recipe } from '../helpers/types';

type RecipeCardProps = {
  recipe: Recipe;
  selected?: boolean;
  onSelectRecipe: (id: string) => void;
};

const RecipeCard = ({ recipe, selected = false, onSelectRecipe }: RecipeCardProps) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg cursor-pointer bg-white ${
        selected ? 'border-4 border-yellow-400 ' : 'border border-gray-200'
      }`}
      onClick={() => onSelectRecipe(recipe.id)}
    >
      <div className='aspect-w-3 aspect-h-4 group-hover:opacity-75 '>
        <div className='h-full w-full object-cover object-center sm:h-full sm:w-full flex justify-center content-center'>
          <Image
            src={recipe.image.url ?? ''}
            alt={recipe.title}
            width={500}
            height={250}
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col space-y-2 p-4'>
        <h3 className='text-sm font-medium text-gray-900'>
          <span aria-hidden='true' className='absolute inset-0' />
          {recipe.title}
        </h3>
        <p className='text-sm text-gray-500'>{recipe.subtitle}</p>
        <div className='flex flex-1 flex-col justify-end'>
          {recipe.attributes.map((att) => (
            <p key={att.key} className='text-sm italic text-gray-500'>
              {att.key}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
