export type Recipe = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  mealType: string;
  recipeType: string;
  category: {
    displayText: string;
    __typename: string;
  };
  image: {
    url: string;
    __typename: string;
  };
  attributes: mealAttribute[];
  extraFees: [];
  __typename: string;
};

export type SelectedRecipe = { id: string; title: string };

type mealAttribute = {
  key: keyof typeof mealAttributeKeys;
  __typename: string;
};

export const mealAttributeKeys = {
  no_gluten_ingredients: 'no added gluten',
  under_30min: 'fast',
  poultry: 'poultry',
  kid_friendly: 'kid friendly',
  dairy_free: 'dairy free',
  meat: 'meat',
  optional_heat: 'optional heat',
  vegetarian: 'vegetarian',
};

export type UserInfo = {
  firstName: string;
  email: string;
};
