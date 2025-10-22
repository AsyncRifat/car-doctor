'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Handbag } from 'lucide-react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session, status } = useSession();

  console.log('SESSION:', session);
  console.log('STATUS:', status);

  return (
    <>
      <Handbag />
      <Search />
      {/* register button */}
      {status === 'authenticated' ? (
        <Button
          variant={'navButton'}
          className="hidden lg:block px-5 pb-8 pt-3 cursor-pointer"
          onClick={() => signOut()}
        >
          Log Out
        </Button>
      ) : (
        <>
          <Button
            asChild
            variant={'navButton'}
            className="hidden lg:block px-5 pb-8 pt-3 cursor-pointer"
          >
            <Link href="/register">Sign Up</Link>
          </Button>
        </>
      )}

      {/* Appointment button */}
      <Button
        variant={'navButton'}
        className="hidden lg:block px-8 pb-8 pt-3 cursor-pointer"
      >
        Appointment
      </Button>
    </>
  );
}
