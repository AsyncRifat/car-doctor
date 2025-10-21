'use server';
import bcrypt from 'bcryptjs';
import dbConnect, { collectionNames } from '@/lib/dbConnect';

export const loginUser = async payload => {
  try {
    const { email, password } = payload;
    const usersData = dbConnect(collectionNames.USERS);

    // Missing fields
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    // Find user
    const user = await usersData.findOne({ email });
    if (!user) {
      return { success: false, error: 'User not found' };
    }

    // Compare password
    const isPasswordOk = await bcrypt.compare(password, user.password);
    if (!isPasswordOk) {
      return { success: false, error: 'Invalid email or password' };
    }

    // Success
    return {
      success: true,
      message: 'User login successful!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.error('Error in loginUser:', error);
    return {
      success: false,
      error: error.message || 'Server error',
    };
  }
};
