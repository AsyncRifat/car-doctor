'use client';

import React, { useEffect, useState } from 'react';
import MyBookingTable from '../components/tables/MyBookingTable';
import Link from 'next/link';
import Image from 'next/image';
import Booking_image from '@/assets/images/booking_img/booking_img.png';
import Booking_image_overlay from '@/assets/images/booking_img/booking_banner_overlay.png';

export default function MyBookingsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/service`
        );
        const d = await res.json();
        // console.log(d);
        setData(d);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBookingData();
  }, []);

  return (
    <>
      {/* banner section */}
      <section className="relative w-11/12 mx-auto my-10">
        <figure className="relative">
          {/* banner image */}
          <Image
            src={Booking_image}
            alt={'Booking Banner'}
            placeholder="blur"
            className="md:w-[968px] lg:w-[1024px] xl:w-[1280px] object-cover mx-auto"
          />

          <Image
            src={Booking_image_overlay}
            alt={'Booking Banner'}
            placeholder="blur"
            className="absolute inset-0 md:w-[968px] lg:w-[1024px] xl:w-[1280px] object-cover mx-auto"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center text-white">
            <h2 className="pl-20 text-3xl md:text-4xl font-bold w-fit ">
              My Booking Details
            </h2>
          </div>
        </figure>

        {/* Breadcrumb */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 text-sm md:text-base font-semibold  w-fit px-7 py-2 clip-trapezoid">
          <Link href="/" className="hover:underline text-white/90">
            Home
          </Link>
          <span className="px-2 text-white/80">/</span>

          <Link href="/service" className="hover:underline text-white/90">
            Service
          </Link>
          <span className="px-2 text-white/80">/</span>
          <span className="text-white">Service Details</span>
        </div>
      </section>

      <section>
        <MyBookingTable bookingData={data} />
      </section>
    </>
  );
}
