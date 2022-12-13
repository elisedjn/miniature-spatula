import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

type InputProps = {
  label: string;
  mandatory?: boolean;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = ({
  label,
  mandatory,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <div>
      <div className='flex justify-between '>
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <span
          className='text-xs text-gray-500'
          id={name + '-' + mandatory ? 'mandatory' : 'optional'}
        >
          {mandatory ? 'Mandatory' : 'Optional'}
        </span>
      </div>
      <div className='mt-1'>
        <input
          type={type}
          name={name}
          id={id}
          className={`block w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm ${
            !!error ? 'border-red-600' : 'border-gray-300'
          }`}
          placeholder={placeholder}
          aria-describedby={name + '-' + mandatory ? 'mandatory' : 'optional'}
          value={value}
          onChange={onChange}
        />
      </div>
      {!!error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
