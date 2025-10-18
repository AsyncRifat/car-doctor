import Image from 'next/image';
import React from 'react';
import AboutUs1 from '@/assets/images/about_us/person.jpg';
import AboutUs2 from '@/assets/images/about_us/parts.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side images */}
      <section className="relative">
        {/* image1 */}
        <div className="relative h-[410px] w-[485px] rounded-lg overflow-hidden">
          <Image
            src={AboutUs1}
            alt="person picture"
            fill
            placeholder="blur"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* image2 */}
        <div className="absolute -bottom-1 right-0 h-[302px] w-[327px] border-8 border-[#e8f0f8] rounded-lg overflow-hidden">
          <Image
            src={AboutUs2}
            alt="parts picture"
            fill
            placeholder="blur"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Right side text */}
      <section className=" space-y-5">
        <h2 className="text-orange-500 font-bold">About Us</h2>
        <h2 className="text-3xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <div className="space-y-2.5 text-justify">
          <p className="text-gray-600">
            With years of hands-on experience and a passion for innovation, we
            provide top-notch automotive services that ensure your vehicle runs
            smoothly and safely. From expert diagnostics to precision repairs,
            our dedicated team delivers excellence you can trust.
          </p>
          <p className="text-gray-600">
            Our workshop is equipped with advanced diagnostic tools and genuine
            spare parts, handled by a team of certified technicians who treat
            every vehicle with care and dedication. Whether it's routine
            servicing, engine repair, or complete restoration — we make sure
            every detail is handled with perfection.
          </p>

          <p className="text-gray-600">
            We believe trust is built through quality and transparency. That’s
            why we maintain open communication, provide clear pricing, and
            ensure that every customer drives away with confidence. From small
            cars to luxury models, we bring the same level of attention and
            excellence to every job we do.
          </p>
        </div>

        <Button asChild variant={'banner_btn1'} className="px-7 py-6">
          <Link href={'#'}>Get More Info</Link>
        </Button>
      </section>
    </article>
  );
}
