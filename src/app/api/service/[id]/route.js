import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;

    // Connect to database
    const serviceCollection = dbConnect(collectionNames.SERVICES);
    // Find document by ID
    const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return NextResponse.json(
        { message: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
