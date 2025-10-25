import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export const POST = async req => {
  try {
    const body = await req.json();
    // console.log(body);

    const servicesPostedData = dbConnect(collectionNames.BOOKING_COLLECTION);
    const result = await servicesPostedData.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
