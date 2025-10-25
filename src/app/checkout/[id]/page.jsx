import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

export default async function CheckoutPage({ params }) {
  const p = await params;
  console.log(p);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/service/${p.id}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch service details');
  }
  const data = await res.json();
  return (
    <>
      <CheckoutForm data={data} />
    </>
  );
}
