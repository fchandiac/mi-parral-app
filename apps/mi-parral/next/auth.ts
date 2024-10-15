import NextAuth, { Session } from 'next-auth';
import authConfig from '@/auth.config';
import { validateUser, registerGoogleUser } from './app/actions/auth-actions';

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    signIn: async ({ user, account, profile, email, credentials }) => {
      // redirect('/userApp');
      return true;
    },
  },
  pages: {
    signIn: '/sign-in',
  },

  events: {
    signIn: async ({ user, account }) =>  {
      const email = user.email ? user.email : '';
      console.log('signIn-Email', email);

      console.log('signIn-User', user, account);
      try {
        const dbUser = await validateUser(email);
        if (dbUser.statusCode === 401) {
          const registerUser = await registerGoogleUser(user.id, user.email, user.name, user.image);
        }
      } catch (error) {
        console.log('signIn-Error', error);
      }
    },
    signOut: async (message) => {
      // console.log('signOut', message);
    },
  },

  ...authConfig,
});

