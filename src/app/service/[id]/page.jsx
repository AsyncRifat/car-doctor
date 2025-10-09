import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/checkout/checkout.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  // console.log(p);

  //match in DB
  const serviceCollection = dbConnect(collectionNames.SERVICES);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <>
      {/* banner section */}
      <section className="relative w-11/12 mx-auto my-10">
        <figure className="relative">
          {/* banner image */}
          <Image
            src={banner}
            alt={data?.title}
            placeholder="blur"
            className="md:w-[968px] lg:w-[1024px] xl:w-[1280px] object-cover mx-auto"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center text-white overlay-bg">
            <h2 className="pl-20 text-3xl md:text-4xl font-bold w-fit ">
              Service Details
            </h2>
          </div>
        </figure>

        {/* Breadcrumb */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 text-sm md:text-base font-semibold  w-fit px-7 py-2 clip-trapezoid">
          <Link href="/" className="hover:underline text-white/90">
            Home
          </Link>
          <span className="px-2 text-white/80">/</span>
          <span className="text-white">Service Details</span>
        </div>
      </section>

      {/* dynamic section */}
      <section className="max-w-7xl mx-auto grid grid-cols-5 gap-15 mt-16">
        <figure className="col-span-3">
          <Image
            src={data?.img}
            width={752}
            height={400}
            alt={data?.title}
            // placeholder="blur"
            priority
            className="rounded-lg"
          />
        </figure>
        <div className="col-span-2 bg-gray-300 p-10 rounded-lg">
          <h2 className="mb-8">Service</h2>

          <div className="flex flex-col gap-y-5">
            <Link href={'/'}>
              <p className="group flex justify-between items-center p-3 bg-light rounded-lg font-semibold">
                <span className="group-hover:text-gray-50 transition-colors duration-300">
                  {' '}
                  Full Car Repair
                </span>{' '}
                <span>
                  <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                </span>
              </p>
            </Link>

            <Link href={'/'}>
              <p className="group flex justify-between items-center p-3 bg-light rounded-lg font-semibold">
                <span className="group-hover:text-gray-50 transition-colors duration-300">
                  {' '}
                  Full Car Repair
                </span>{' '}
                <span>
                  <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                </span>
              </p>
            </Link>
            <Link href={'/'}>
              <p className="group flex justify-between items-center p-3 bg-light rounded-lg font-semibold">
                <span className="group-hover:text-gray-50 transition-colors duration-300">
                  {' '}
                  Full Car Repair
                </span>{' '}
                <span>
                  <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                </span>
              </p>
            </Link>
            <Link href={'/'}>
              <p className="group flex justify-between items-center p-3 bg-light rounded-lg font-semibold">
                <span className="group-hover:text-gray-50 transition-colors duration-300">
                  {' '}
                  Full Car Repair
                </span>{' '}
                <span>
                  <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
