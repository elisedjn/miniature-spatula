import Router from 'next/router';
import React from 'react';
import Button from '../components/marley-button';
import UserDetailsForm from '../components/user-details-form';
import { useAppContext } from '../contexts/state';

const UserDetails = () => {
  const { selected } = useAppContext();

  return (
    <div className='flex w-full justify-center items-stretch gap-10'>
      <div className='bg-white rounded-lg border p-8 gap-8 flex-col flex w-1/3 justify-between'>
        <h3 className='text-xl'>Your selected recipes</h3>
        <ul>
          {selected.map((recipe) => (
            <li className='py-2' key={recipe.id}>
              - {recipe.title}
            </li>
          ))}
        </ul>
        <Button btnText='Change recipes' onClick={() => Router.push('/')} />
      </div>
      <UserDetailsForm />
    </div>
  );
};

export default UserDetails;
