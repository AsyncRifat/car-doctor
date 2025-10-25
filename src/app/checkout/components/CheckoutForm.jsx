'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsTools } from 'react-icons/bs';
import { toast } from 'sonner';

export default function CheckoutForm({ data }) {
  const navigate = useRouter();
  const { data: session } = useSession();
  // console.log(session?.user || '');

  const { _id, title, img, price } = data;
  const servicePrice = Number(price);
  // console.log(data);

  const [selectedCode, setSelectedCode] = useState('+880');
  const phonePatterns = {
    '+880': /^[0-9]{10}$/,
    '+91': /^[0-9]{10}$/,
    '+1': /^[0-9]{10}$/,
    '+44': /^[0-9]{10}$/,
    '+971': /^[0-9]{9}$/,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const fullPhone = `${selectedCode}${data.phone}`;
    // console.log('Full Phone:', fullPhone);
    // console.log(data);

    const { date, address } = data;
    // console.log(date, address, fullPhone);
    const bookingPayload = {
      serviceId: _id,
      customerName: session?.user?.name,
      email: session?.user?.email,
      issueDate: date,
      phone: fullPhone,
      address,
      service_name: title,
      service_price: servicePrice,
      service_image: img,
    };
    // console.log(bookingPayload);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/service`, {
      method: 'POST',
      body: JSON.stringify(bookingPayload),
    });
    const postedResponse = await res.json();
    // console.log('postedResponse', postedResponse);
    if (postedResponse?.insertedId) {
      reset();
      toast.success('Payment successful');
      navigate.push('/');
    }
  };

  return (
    <section className="max-w-7xl mx-auto my-10 px-10 lg:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <legend className="flex items-center gap-x-5 text-center text-3xl font-bold mb-10 p-2 w-fit mx-auto bg-gray-200/70 rounded-lg">
          BOOKING{' '}
          <span className="text-orange-500">
            <BsTools />
          </span>
        </legend>
        <h2 className="text-2xl font-bold my-10">
          Service Category: {data?.title}
        </h2>
        <fieldset className="space-y-4">
          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Name filed*/}
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={session?.user?.name || ''}
                readOnly
                className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-3 py-2 outline-none"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* date filed*/}
            <div className="flex-1 flex flex-col">
              <label htmlFor="date" className="font-semibold mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-3 py-2 outline-none"
                {...register('date', { required: 'Date is required' })}
              />
              {errors.date && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Email filed */}
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={session?.user?.email || ''}
                readOnly
                className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-3 py-2 outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Due payment */}
            <div className="flex-1 flex flex-col">
              <label htmlFor="payment" className="font-semibold mb-1">
                Payment
              </label>
              <input
                type="number"
                id="payment"
                defaultValue={data?.price}
                readOnly
                min="0"
                step="0.01"
                className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-3 py-2 outline-none"
                {...register('payment', {
                  required: 'Payment is required',
                  min: { value: 0, message: 'Payment must be positive' },
                })}
              />
              {errors.payment && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.payment.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Phone Number field*/}
            <div className="flex-1 flex flex-col">
              <label htmlFor="phone" className="font-semibold mb-1">
                Phone
              </label>
              <div className="relative">
                {/* Country code select */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
                  <select
                    value={selectedCode}
                    onChange={e => {
                      setSelectedCode(e.target.value);
                      setValue('phone', ''); // reset phone input when country changes
                    }}
                    className="bg-transparent outline-none"
                  >
                    <option value="+880">+880 (BD)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                  </select>
                </div>

                {/* Phone input */}
                <input
                  type="text"
                  id="phone"
                  inputMode="numeric"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg pl-36 pr-5 py-2 outline-none"
                  {...register('phone', {
                    required: 'Phone Number is required',
                    pattern: {
                      value: phonePatterns[selectedCode],
                      message: `Invalid number format for ${selectedCode}`,
                    },
                  })}
                />
              </div>

              {/* Error */}
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Address field*/}
            <div className="flex-1 flex flex-col">
              <label htmlFor="address" className="font-semibold mb-1">
                Present Address
              </label>
              <input
                type="text"
                id="address"
                className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-3 py-2 outline-none"
                {...register('address', { required: 'Address is required' })}
              />
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-10 py-2 rounded-md transition"
        >
          Order Confirm
        </Button>
      </form>
    </section>
  );
}
