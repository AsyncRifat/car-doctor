'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const { email, password } = data;

    // signIn method call
    const res = await signIn('credentials', { email, password });
  };

  return (
    <section className="p-16 space-y-10 border border-orange-600/10 rounded-lg">
      <h1 className="text-3xl font-bold text-center">Sign In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto rounded-xl space-y-5"
      >
        <fieldset className="flex flex-col justify-center space-y-3">
          {/* email field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className="border border-gray-300 focus:border-orange-500 focus:right-1 focus:ring-orange-500 rounded-md px-3 py-2 outline-none"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="border border-gray-300 focus:border-orange-500 focus:right-1 focus:ring-orange-500 rounded-md px-3 py-2 outline-none"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition mt-2"
        >
          Login
        </button>
      </form>

      <h3 className="text-center text-sm">Or Sign In with</h3>

      {/* TODO: Social login */}

      <h3 className="text-center text-xs">
        Have an account?{' '}
        <span className="text-sm font-semibold text-orange-500 hover:underline">
          <Link href="/register">Sign In</Link>
        </span>
      </h3>
    </section>
  );
}
