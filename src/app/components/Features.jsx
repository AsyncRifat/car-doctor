import { ClockFading } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Rabbit } from 'lucide-react';
import { BookCheck } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Users } from 'lucide-react';
import React from 'react';

export default function Features() {
  return (
    <section>
      <header className="text-center space-y-3 my-10 px-2">
        <h4 className="text-orange-500 font-bold">Core Features</h4>
        <h2 className="font-bold text-3xl">Why Choose Us</h2>
        <p className="max-w-xl text-sm mx-auto">
          Our core features highlight what sets us apart in service and
          innovation. We focus on quality, reliability, and customer
          satisfaction through modern technology and expert craftsmanship.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 md:gap-10 lg:gap-14">
        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 rounded-lg transition-all duration-700">
          <Users
            size={34}
            className="text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            Expert Team
          </p>
        </div>

        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-700">
          <ClockFading
            size={34}
            className="text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            Timely Delivery
          </p>
        </div>

        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-700">
          <Headset
            size={34}
            className="text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            24/7 Support
          </p>
        </div>

        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-700">
          <Wrench
            size={34}
            className="group text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            Best Equipment
          </p>
        </div>

        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-700">
          <BookCheck
            size={34}
            className="text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            100% Guaranty
          </p>
        </div>

        <div className="group justify-items-center border border-orange-600/10 p-5 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-700">
          <Rabbit
            size={34}
            className="text-orange-500 group-hover:text-gray-200 transition-all duration-700"
          />
          <p className="text-gray-700 group-hover:text-gray-200 mt-1.5 font-bold transition-all duration-800">
            Timely Delivery
          </p>
        </div>
      </div>
    </section>
  );
}
