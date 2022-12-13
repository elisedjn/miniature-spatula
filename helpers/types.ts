export type Recipe = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  mealType: string;
  Recipe: string;
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
  __typeName: string;
};

type mealAttribute = {
  key: string;
  __typename: string;
};
