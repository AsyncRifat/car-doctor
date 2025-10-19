'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  ReviewNext,
  ReviewPrevious,
} from '@/components/ui/carousel';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: 'David Miller',
      role: 'Auto Enthusiast',
      image:
        'https://res.cloudinary.com/dtckwuhxw/image/upload/v1757490692/quiz-pilot/avatar/kgmwb7snnyvpxrmty8gn.jpg',
      rating: 5,
      text: 'Fantastic experience! The staff explained everything clearly and handled my car with great care. It runs smoother than ever!',
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      role: 'Corporate Client',
      image:
        'https://res.cloudinary.com/dtckwuhxw/image/upload/v1757490692/quiz-pilot/avatar/kgmwb7snnyvpxrmty8gn.jpg',
      rating: 4,
      text: 'Great service overall. Booking was easy and the team kept me updated throughout the process. Highly professional!',
    },
    {
      id: 3,
      name: 'James Anderson',
      role: 'Car Owner',
      image:
        'https://res.cloudinary.com/dtckwuhxw/image/upload/v1757490692/quiz-pilot/avatar/kgmwb7snnyvpxrmty8gn.jpg',
      rating: 5,
      text: 'Outstanding quality of work! My car looks brand new. The attention to detail and customer support were top-notch.',
    },
    {
      id: 4,
      name: 'Olivia Brown',
      role: 'Regular Customer',
      image:
        'https://res.cloudinary.com/dtckwuhxw/image/upload/v1757490692/quiz-pilot/avatar/kgmwb7snnyvpxrmty8gn.jpg',
      rating: 5,
      text: 'Every time I visit, I receive excellent service. They always go the extra mile to make sure everything is perfect.',
    },
    {
      id: 5,
      name: 'Liam Wilson',
      role: 'Fleet Manager',
      image:
        'https://res.cloudinary.com/dtckwuhxw/image/upload/v1757490692/quiz-pilot/avatar/kgmwb7snnyvpxrmty8gn.jpg',
      rating: 4,
      text: 'Dependable and efficient. The team handles our company vehicles with professionalism and care. Highly recommended!',
    },
  ];

  return (
    <section className="mb-16 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <header className="text-center space-y-3 mb-10">
        <h4 className="text-orange-500 font-bold">Customer Review</h4>
        <h2 className="font-bold text-3xl">Happy Customer</h2>
        <p className="max-w-xl text-sm mx-auto">
          We take pride in earning the trust of our customers through honest
          service, top-notch quality, and personalized care. Every review
          reflects our commitment to excellence and the long-lasting
          relationships we build with our clients.
        </p>
      </header>

      {/* Carousel */}
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {reviews.map(review => (
            <CarouselItem
              key={review.id}
              className="md:basis-1/2 lg:basis-1/3 p-4"
            >
              <div className="border border-orange-600/10 rounded-lg p-6 text-center hover:shadow-sm transition-all duration-800">
                {/* Reviewer Image */}
                <div className="relative h-[80px] w-[80px] mx-auto overflow-hidden rounded-full">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-center text-yellow-500 mt-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed italic mt-4">
                  “{review.text}”
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <ReviewPrevious className="text-orange-500" />
        <ReviewNext className="text-orange-500" />
      </Carousel>
    </section>
  );
}
