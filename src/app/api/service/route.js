import { authOptions } from '@/lib/authOptions';
import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async req => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (session) {
    // console.log(session);
    const email = session?.user?.email;
    const getBooking = dbConnect(collectionNames.BOOKING_COLLECTION);
    const result = await getBooking.find({ email }).toArray();
    console.log(result);
    return NextResponse.json(result);
  }
};

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
