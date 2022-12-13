import React from 'react';
import { useAppContext } from '../contexts/state';
import Input from './input';
import Button from './marley-button';

const UserDetailsForm = () => {
  const { userInfo, onUserDetailChange, errors, onConfirmForm } = useAppContext();

  return (
    <div className='bg-white rounded-lg border p-8 gap-8 flex-col flex w-full'>
      <h3 className='text-xl'>Personnal information</h3>
      <Input
        label='First Name'
        mandatory
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Marley'
        value={userInfo.firstName}
        onChange={(e) => onUserDetailChange('firstName', e.target.value)}
        error={
          errors.includes('no_first_name') ? 'Please enter your first name' : undefined
        }
      />

      <Input
        label='Email'
        mandatory
        type='email'
        name='email'
        id='email'
        placeholder='you@example.com'
        value={userInfo.email}
        onChange={(e) => onUserDetailChange('email', e.target.value)}
        error={
          errors.includes('no_email')
            ? 'Please enter your email'
            : errors.includes('wrong_email')
            ? 'Please enter a valid email'
            : undefined
        }
      />

      <div className='w-full text-right'>
        <Button btnText='Confirm' onClick={onConfirmForm} />
      </div>
    </div>
  );
};

export default UserDetailsForm;
