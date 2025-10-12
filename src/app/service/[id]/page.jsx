import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/checkout/checkout.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <article className="col-span-3">
          {/* Service Image */}
          <figure>
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

          {/* Text */}
          <div className="space-y-4 mt-4">
            <h1 className="text-3xl font-bold">
              {data?.title || 'Title Name'}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-500">
              {data?.description || 'Description'}
            </p>
          </div>

          {/* facility */}
          <div className="grid grid-cols-2 gap-10 my-10">
            {data.facility.map((single_facility, index) => (
              <div
                key={single_facility._id || index}
                className="border-t-3 border-t-orange-500 bg-gray-300 dark:bg-gray-700 p-8 rounded-lg space-y-2"
              >
                <h3 className="text-lg font-semibold">Instant Car Services</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fuga numquam nulla nam, facere neque dignissimos ab esse magni
                  accusamus eveniet ad corrupti, architecto nostrum.
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-500 mb-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </article>

        {/* Service section */}
        <div className="col-span-2 space-y-5 sticky top-20 h-fit mb-5">
          <div className="bg-gray-300 dark:bg-gray-700 p-10 rounded-lg h-fit">
            <h2 className="mb-5 text-2xl font-bold">Service</h2>

            {/* Service Type */}
            <div className="flex flex-col gap-y-5">
              <Link href={'/'}>
                <p className="group flex justify-between items-center p-5 bg-light rounded-lg font-semibold">
                  <span className="text-lg font-semibold group-hover:text-gray-50 transition-colors duration-300">
                    {' '}
                    Full Car Repair
                  </span>{' '}
                  <span>
                    <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                  </span>
                </p>
              </Link>

              <Link href={'/'}>
                <p className="group flex justify-between items-center p-5 bg-light rounded-lg font-semibold">
                  <span className="text-lg font-semibold group-hover:text-gray-50 transition-colors duration-300">
                    {' '}
                    Engine Repair
                  </span>{' '}
                  <span>
                    <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                  </span>
                </p>
              </Link>

              <Link href={'/'}>
                <p className="group flex justify-between items-center p-5 bg-light rounded-lg font-semibold">
                  <span className="text-lg font-semibold group-hover:text-gray-50 transition-colors duration-300">
                    {' '}
                    Automatic Services
                  </span>{' '}
                  <span>
                    <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                  </span>
                </p>
              </Link>

              <Link href={'/'}>
                <p className="group flex justify-between items-center p-5 bg-light rounded-lg font-semibold">
                  <span className="text-lg font-semibold group-hover:text-gray-50 transition-colors duration-300">
                    {' '}
                    Engine Oil Change
                  </span>{' '}
                  <span>
                    <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                  </span>
                </p>
              </Link>

              <Link href={'/'}>
                <p className="group flex justify-between items-center p-5 bg-light rounded-lg font-semibold">
                  <span className="text-lg font-semibold group-hover:text-gray-50 transition-colors duration-300">
                    {' '}
                    Battery Charge
                  </span>{' '}
                  <span>
                    <ArrowRight className="text-orange-500 group-hover:text-gray-50 transition-colors duration-300" />
                  </span>
                </p>
              </Link>
            </div>
          </div>

          {/* Help */}
          <div className="p-10 bg-black rounded-lg space-y-5">
            <figure>
              <Image
                src={'/logo.svg'}
                width={141}
                height={115}
                alt="logo"
                className="mx-auto"
              />
            </figure>

            <h3 className="text-2xl font-bold text-white text-center">
              Need Help? <br /> We Are Here To Help You
            </h3>

            <div className="relative bg-[#e8f0f8] text-xl font-semibold text-center rounded-lg pt-10 pb-15">
              <div className="space-y-3">
                <p className="text-2xl font-semibold">
                  <span className="text-orange-500">Car Doctor</span> Special
                </p>
                <p className="text-xl font-semibold">
                  Save up to <span className="text-orange-500">60% off</span>
                </p>
              </div>

              <Button className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 py-6 bg-orange-500 text-lg font-semibold">
                Get A Quote
              </Button>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">
              Price ${data?.price || 'Price'}
            </h2>
            <Button className="bg-orange-500 cursor-pointer rounded-lg p-7 text-xl font-bold text-center w-full">
              Proceed Checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
