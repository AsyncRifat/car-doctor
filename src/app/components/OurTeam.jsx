import Image from 'next/image';
import React from 'react';

import t1 from '@/assets/images/team/1.jpg';
import t2 from '@/assets/images/team/2.jpg';
import t3 from '@/assets/images/team/3.jpg';
import Link from 'next/link';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const teamImages = [
  { id: 1, src: t1, alt: 'Engine Engineer', name: 'Ian C. Jones' },
  { id: 2, src: t2, alt: 'Design Engineer', name: 'Jonathan Porter' },
  { id: 3, src: t3, alt: 'Engine Engineer', name: 'Peter Power' },
];

export default function OurTeam() {
  return (
    <section>
      <header className="text-center space-y-3 my-10 px-2">
        <h4 className="text-orange-500 font-bold">Team</h4>
        <h2 className="font-bold text-3xl">Meet Our Team</h2>
        <p className="max-w-xl text-sm mx-auto">
          Our dedicated team of skilled professionals works passionately to
          deliver exceptional service and innovative solutions. Together, we
          combine expertise, integrity, and creativity to achieve excellence in
          everything we do.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-15 pb-10">
        {teamImages.map(engineer => (
          <article
            key={engineer.id}
            className="border border-orange-600/10 rounded-lg p-7"
          >
            <div>
              <Image
                src={engineer.src}
                alt={engineer.alt}
                width={314}
                height={295}
                priority
                className="object-cover object-center rounded-lg"
              />
            </div>

            <div className="mt-3">
              <h2 className="text-center text-lg font-bold">
                {engineer.name || 'Name'}
              </h2>
              <p className="text-center text-xs text-gray-600 dark:text-gray-300 ">
                {engineer.alt || 'expertise'}
              </p>

              <div className="flex justify-center items-center gap-4 mt-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                >
                  <Facebook size={20} />
                </Link>

                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                  className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-all duration-200"
                >
                  <Twitter size={20} />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
