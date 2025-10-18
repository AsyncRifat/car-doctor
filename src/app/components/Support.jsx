import { PhoneCall } from 'lucide-react';
import { MapPinCheck } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import React from 'react';

export default function Support() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-15 px-20 py-16 border bg-black dark:bg-gray-300 text-gray-200 dark:text-gray-700 rounded-lg">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 mx-auto">
          <CalendarClock size={32} className="text-orange-500" />
        </div>
        <div className="col-span-8">
          <p className="text-sm">We are open monday-friday</p>
          <h2 className="font-bold text-lg">7:00 am - 9:00 pm</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3 mx-auto">
          <PhoneCall size={32} className="text-orange-500" />
        </div>
        <div className="col-span-9">
          <p className="text-sm">Have a question?</p>
          <h2 className="font-bold text-lg">+880 1737 168011</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3 mx-auto">
          <MapPinCheck size={32} className="text-orange-500" />
        </div>
        <div className="col-span-9">
          <p className="text-sm">Need a repair? our address</p>
          <h2 className="font-bold text-lg">Dhaka, Bangladesh</h2>
        </div>
      </div>
    </section>
  );
}
