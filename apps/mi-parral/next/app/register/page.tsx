import React from 'react';
import RegisterForm from './ui/RegisterForm';
import { SessionProvider } from 'next-auth/react';

export default function Register() {
  return (
    <>
      <SessionProvider>
        <RegisterForm />
      </SessionProvider>
    </>
  );
}
