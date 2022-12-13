import React from 'react';
import FloattingButton from '../components/floatting-button';
import UserDetailsForm from '../components/user-details-form';
import Form from '../components/user-details-form';
import { useAppContext } from '../contexts/state';

const UserDetails = () => {
  const { selected } = useAppContext();
  return (
    <div className='flex w-full justify-center items-stretch gap-10'>
      <div className='bg-white rounded-lg border p-8 gap-8 flex-col flex w-1/3'>
        <h3 className='text-xl'>Your selected recipes</h3>
        <div>
          {selected.map((recipe) => (
            <div key={recipe.id}>{recipe.title}</div>
          ))}
        </div>
      </div>
      <UserDetailsForm />
    </div>
  );
};

export const getStaticProps = () => {};

export default UserDetails;
