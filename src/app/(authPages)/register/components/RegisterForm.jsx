'use client';

import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SocialLogIn from '../../components/SocialLogIn';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    // fields data
    const res = await registerUser(data);
    // return message
    if (res?.success) {
      console.log(res.userId);
      toast.success(res.message || 'Congratulation! Successful registered');
      reset();
    } else {
      toast.error(res.error || 'Something went wrong!');
    }
  };
  return (
    <section className="p-16 space-y-10 border border-orange-600/10 rounded-lg">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto rounded-xl space-y-5"
      >
        <fieldset className="flex flex-col justify-center space-y-3">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Name is required',
                maxLength: 20,
              })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3 py-2 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3 py-2 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
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
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3 py-2 outline-none"
              placeholder="Enter your password"
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
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
        >
          Register
        </button>
      </form>

      <div className="space-y-3">
        <h3 className="text-center text-sm">Or Sign Up with</h3>
        {/* Done: Social login */}
        <SocialLogIn />
      </div>

      <h3 className="text-center text-xs">
        Already have an account?{' '}
        <span className="text-sm font-semibold text-orange-500 hover:underline">
          <Link href="/login">Login</Link>
        </span>
      </h3>
    </section>
  );
}
