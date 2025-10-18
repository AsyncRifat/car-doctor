'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const bannerImages = [
  { id: 1, src: '/banner/1.jpg', alt: 'Professional web design banner' },
  { id: 2, src: '/banner/2.jpg', alt: 'Responsive website layout banner' },
  { id: 3, src: '/banner/3.jpg', alt: 'Digital marketing banner' },
  { id: 4, src: '/banner/4.jpg', alt: 'E-commerce website banner' },
  { id: 5, src: '/banner/5.jpg', alt: 'SEO optimization banner' },
  { id: 6, src: '/banner/6.jpg', alt: 'Creative branding banner' },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="relative mt-8 w-full h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {bannerImages.map((banner, index) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={1920}
                  height={1080}
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* navigation Button */}
        <CarouselPrevious className="z-20" />
        <CarouselNext className="z-20" />
      </Carousel>

      {/* Banner text */}
      <article className="absolute inset-0 pl-20 flex items-center text-white bg-black/40 z-5">
        <div className="w-2/7 space-y-2">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          {/* button's */}
          <div className="md:flex gap-6 mt-5">
            <Button asChild className="px-7 py-6" variant={'banner_btn1'}>
              <Link href="#">Discover More</Link>
            </Button>
            <Button
              asChild
              className="px-7 py-[22.5px]"
              variant={'banner_btn2'}
            >
              <Link href="#">Latest Project</Link>
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
