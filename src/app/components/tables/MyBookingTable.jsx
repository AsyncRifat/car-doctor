import Image from 'next/image';
import React from 'react';

export default function MyBookingTable({ bookingData }) {
  // const { service_image, service_name, service_price } = bookingData;
  console.log(bookingData);
  return (
    <section className="max-w-7xl mx-auto my-10 border">
      {bookingData.map(singleData => {
        <article key={singleData?._id}>
          <figure>
            <Image
              src={singleData?.service_image}
              alt={singleData?.service_name}
              width={150}
              height={150}
              className="object-cover"
              priority
            />
          </figure>

          <div>
            <h2>{singleData}</h2>
          </div>
        </article>;
      })}
    </section>
  );
}
