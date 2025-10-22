'use server';
import bcrypt from 'bcryptjs';
import dbConnect, { collectionNames } from '@/lib/dbConnect';

export const registerUser = async payload => {
  // console.log(payload);

  try {
    const { name, email, password } = payload;
    const userCollection = dbConnect(collectionNames.USERS);

    // missing filed
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    // Check existing user
    const existingUser = await userCollection.findOne({ email: payload.email });
    if (existingUser) {
      return { success: false, error: 'User already exists' };
    }

    // save data
    if (!existingUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      payload.password = hashPassword;
      payload.createAt = new Date();
      payload.role = 'user';
      const result = await userCollection.insertOne(payload);

      // "insertedId" must be convert to string
      return {
        success: true,
        userId: result.insertedId.toString(),
        message: 'User registered successfully!',
      };
    }
  } catch (error) {
    console.error('Error in POST:', error);
    return {
      success: false,
      error: error.message || 'Something went wrong on the server',
    };
  }
};
