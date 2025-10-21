import { loginUser } from '@/app/actions/auth/loginUser';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        console.log(
          'CREDENTIAL FROM LogIn field  -- lib>authOptions : ',
          credentials
        );

        const user = await loginUser(credentials);

        // current-user checking...
        if (user && user.success) {
          console.log('Invalid credentials or user not found');
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};
