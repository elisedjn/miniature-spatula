export const validEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const getFloatingText = (length: number) => {
  return length === 0
    ? 'Choose 2 recipes from the list'
    : length === 1
    ? 'One more recipe to pick up!'
    : 'Ready for the next step? ';
};
