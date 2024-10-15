import { NextAuthConfig } from 'next-auth';
import { AuthError } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';



export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const fetchUser = await fetch( process.env.NEXT_PUBLIC_AUTH_BACKEND_URL + '/signIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              host: 'localhost:9001',
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await fetchUser.json();

          if (data.statusCode === 401) {
            throw new AuthError('Invalid credentials');
          }
          return data;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
