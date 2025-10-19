import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default async function Products() {
  const productsCollection = dbConnect(collectionNames.PRODUCTS);
  const products = await productsCollection.find().toArray();

  return (
    <div>
      <header className="text-center space-y-3 my-10 px-2">
        <h4 className="text-orange-500 font-bold">Popular Products</h4>
        <h2 className="font-bold text-3xl">Browse Our Products</h2>
        <p className="max-w-xl text-sm mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-15 pb-10">
        {products.map(product => {
          const fullStars = Math.floor(product.rating); // full stars
          const halfStarPercentage = (product.rating - fullStars) * 100; //Partially filled star
          const totalStars = 5; //total stars
          return (
            <article
              key={product._id}
              className="border border-orange-600/10 rounded-lg p-7 "
            >
              <figure className=" bg-gray-200/50 p-5 w-[330px] h-[220px] flex justify-center items-center rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.model}
                  width={200}
                  height={200}
                  priority
                />
              </figure>

              <div className="space-y-2">
                {/* rating section */}
                <div className="flex items-center justify-center gap-1 mt-5">
                  {[...Array(totalStars)].map((_, index) => {
                    const starIndex = index + 1;

                    // full stars
                    if (starIndex <= fullStars) {
                      return (
                        <Star
                          key={index}
                          size={20}
                          className="text-yellow-600 fill-yellow-600"
                        />
                      );
                    }

                    // Partially filled star 4.7
                    // starIndex = 5
                    // fullStars + 1 = 4 + 1 = 5
                    // halfStarPercentage = 70
                    if (starIndex === fullStars + 1 && halfStarPercentage > 0) {
                      return (
                        <div key={index} className="relative w-[20px] h-[20px]">
                          {/* Gray background */}
                          <Star
                            size={20}
                            className="text-gray-400 absolute top-0 left-0"
                          />

                          {/* Yellow overlay (only fills some parts) */}
                          <div
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{ width: `${halfStarPercentage}%` }}
                          >
                            <Star
                              size={20}
                              className="text-yellow-600 fill-yellow-600"
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>

                <h1 className="text-center font-semibold ">
                  {product.title || 'Rifat'}
                </h1>
                <p className="text-orange-500 text-center font-bold">
                  $ {product.price}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
