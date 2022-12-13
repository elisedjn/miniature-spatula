import Image from 'next/image';
import React from 'react';
import { mealAttributeKeys, Recipe } from '../helpers/types';

type RecipeCardProps = {
  recipe: Recipe;
  selected?: boolean;
  onSelectRecipe: (id: string, title: string) => void;
};

const RecipeCard = ({ recipe, selected = false, onSelectRecipe }: RecipeCardProps) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg cursor-pointer bg-white ${
        selected ? 'border-8 border-yellow-400 ' : 'border border-gray-200'
      }`}
      onClick={() => onSelectRecipe(recipe.id, recipe.title)}
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

      <div className='flex flex-col p-4 justify-between h-full'>
        <div>
          <h3 className='text-sm font-medium text-gray-900'>
            <span aria-hidden='true' className='absolute inset-0' />
            {recipe.title}
          </h3>
          <p className='text-sm text-gray-500'>{recipe.subtitle}</p>
        </div>
        <div className='flex justify-start flex-wrap-reverse gap-3 mt-8'>
          {recipe.attributes.map((att) => (
            <span
              key={att.key}
              className='inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-medium  text-gray-600 uppercase'
            >
              {mealAttributeKeys[att.key]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
