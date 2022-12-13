import { createContext, useContext, useState } from 'react';

type Context = {
  selected: string[];
  onSelectRecipe: (id: string) => void;
};

interface Props {
  children: any;
}

const AppContext = createContext<Context>({
  selected: [],
  onSelectRecipe: () => null,
});

export function AppWrapper({ children }: Props) {
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

  return (
    <AppContext.Provider value={{ selected, onSelectRecipe }}>
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => {
  return useContext(AppContext);
};
