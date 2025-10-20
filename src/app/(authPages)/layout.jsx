import Image from 'next/image';
import React from 'react';
import AuthImg from '@/assets/images/login/login.svg';

export default function AuthLayout({ children }) {
  return (
    <div className="grid md:grid-cols-2 min-h-svh max-w-7xl mx-auto">
      <div className="hidden md:flex justify-center items-center">
        <Image src={AuthImg} alt="Auth Image" width={460} height={500} />
      </div>
      <div className="p-10">{children}</div>
    </div>
  );
}
