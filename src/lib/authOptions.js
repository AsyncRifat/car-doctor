import { loginUser } from '@/app/actions/auth/loginUser';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import dbConnect, { collectionNames } from './dbConnect';

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

        const response = await loginUser(credentials);
        // console.log('from action > loginUser------->>>', response);

        // current-user checking...
        if (response.user && response.success) {
          return {
            id: response.user.id,
            name: response.user.name,
            email: response.user.email,
          };
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // for google and github login
    async signIn({ user, account, profile, email, credentials }) {
      // see all data console.log()

      if (account) {
        try {
          const { name, email, image } = user;
          const { provider, providerAccountId } = account;

          const payload = {
            name,
            email,
            image,
            provider,
            providerAccountId,
            role: 'user',
            createAt: new Date(),
          };
          console.log('FROM SingIn callback', payload);

          // check data in DB
          const userCollection = dbConnect(collectionNames.USERS);
          const isUserExist = await userCollection.findOne({
            providerAccountId,
          });

          if (!isUserExist) {
            await userCollection.insertOne(payload);
          }
        } catch (error) {
          console.log('Login error', error);
          return false;
        }
      }

      return true;
    },

    // TODO:
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
