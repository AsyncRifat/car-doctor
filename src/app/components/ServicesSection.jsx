'use server';

import { Button } from '@/components/ui/button';
// SEO friendly page
import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ServicesSection() {
  // fetch data in public/json
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SITE_URL}/json/services.json`,
  //   {
  //     cache: 'no-cache',
  //   }
  // );
  // const data = await res.json();

  // fetch data in DB
  const serviceCollection = dbConnect(collectionNames.SERVICES);
  const data = await serviceCollection.find().toArray();

  return (
    <section>
      <header className="text-center space-y-3 my-10 px-2">
        <h4 className="text-orange-500 font-bold">Service</h4>
        <h2 className="font-bold text-3xl">Our Service Area</h2>
        <p className="max-w-xl text-sm mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-center gap-15 pb-10">
        {data.map(service => (
          <article
            key={service?._id}
            className="p-7 border border-orange-600/10 rounded-lg"
            itemScope
            itemType="https://schema.org/Service"
          >
            <figure>
              <Image
                src={service?.img}
                width={314}
                height={208}
                alt={service?.title || 'Service image'}
                className="rounded-lg h-[208px]  w-full object-cover"
              />
            </figure>

            <div className="mt-5 space-y-1.5">
              <h3 className="font-semibold " itemProp="Name">
                {service.title}
              </h3>

              <div className="flex justify-between items-center">
                <p
                  className="text-orange-500 text-sm font-medium"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  Price: $<span itemProp="price">{service.price}</span>
                </p>

                {/* Dynamic route */}
                <Link href={`/service/${service._id}`}>
                  <SquareArrowOutUpRight
                    className="text-orange-500"
                    size={17}
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* button */}
      <Button
        className="flex items-center text-lg text-orange-500 hover:text-white mx-auto px-8 py-6 text-center transition-all duration-700"
        variant={'banner_btn2'}
      >
        More Services
      </Button>
    </section>
  );
}
