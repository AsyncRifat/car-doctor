'use client';
import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SocialLogIn() {
  const session = useSession();
  console.log(session);
  const navigate = useRouter();

  const handleSocialLogin = providers => {
    signIn(providers);
  };

  useEffect(() => {
    if (session?.status == 'authenticated') {
      navigate.push('/');
      toast.success('Successful log In');
    }
  }, [session?.status]);

  return (
    <section className="flex justify-center item-center gap-10">
      <p onClick={() => handleSocialLogin('google')}>
        <FcGoogle size={32} />
      </p>
      <p onClick={() => handleSocialLogin('github')}>
        <FaGithub size={28} />
      </p>
    </section>
  );
}
