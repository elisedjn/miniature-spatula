import Router from 'next/router';
import { createContext, useContext, useState } from 'react';
import { validEmail } from '../helpers/functions';
import { SelectedRecipe, UserInfo } from '../helpers/types';

type Context = {
  selected: SelectedRecipe[];
  onSelectRecipe: (id: string, title: string) => void;
  onUserDetailChange: (field: string, value: string) => void;
  userInfo: UserInfo;
  onConfirmForm: () => void;
  errors: string[];
};

interface Props {
  children: any;
}

const AppContext = createContext<Context>({
  selected: [],
  onSelectRecipe: () => null,
  onUserDetailChange: () => null,
  userInfo: { firstName: '', email: '' },
  onConfirmForm: () => null,
  errors: [],
});

export function AppWrapper({ children }: Props) {
  const [selected, setSelected] = useState<SelectedRecipe[]>([]);

  const [userInfo, setUserInfo] = useState<UserInfo>({ firstName: '', email: '' });

  const [errors, setErrors] = useState<string[]>([]);

  const onSelectRecipe = (id: string, title: string) => {
    if (selected.find((s) => s.id === id)) {
      setSelected((selec) => selec.filter((recipe) => recipe.id != id));
    } else if (selected.length < 2) {
      setSelected((s) => [...s, { id, title }]);
    } else {
      console.log('already 2 selected');
    }
  };

  const onUserDetailChange = (field: string, value: string) => {
    if (field === 'email') {
      setErrors((e) => e.filter((err) => err !== 'no_email' && err !== 'wrong_email'));
    } else if (field === 'firstName') {
      setErrors((e) => e.filter((err) => err !== 'no_first_name'));
    }
    setUserInfo((uI) => ({ ...uI, [field]: value }));
  };

  const onConfirmForm = async () => {
    if (!userInfo.firstName) {
      setErrors((e) => [...e, 'no_first_name']);
    } else if (!userInfo.email) {
      setErrors((e) => [...e, 'no_email']);
    } else if (!validEmail(userInfo.email)) {
      setErrors((e) => [...e, 'wrong_email']);
    } else if (selected.length !== 2) {
      alert('Please Select 2 recipes before to continue');
      Router.push('/');
    } else {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ ...userInfo, recipes: selected.map((r) => r.id) }),
      });
      const { status } = await res.json();
      if (status === 'SUCCESS') {
        Router.push('/confirmation');
        setSelected([]);
        setUserInfo({ firstName: '', email: '' });
      } else {
        alert('Something went wrong, please try again');
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        selected,
        onSelectRecipe,
        onUserDetailChange,
        userInfo,
        onConfirmForm,
        errors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => {
  return useContext(AppContext);
};
