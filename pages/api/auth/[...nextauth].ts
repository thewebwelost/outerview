import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { axiosPrivate } from '../../../utils/http/axios';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await axiosPrivate.post('/login', credentials);

        console.log('[credentials/user]', { credentials, userData: user.data });

        if (user) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('{ user, account, profile, email, credentials }', {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('[Redirect happened]');
      return baseUrl;
    },
    async session({ session, token, user }) {
      console.log('[Session triggered]');
      console.log('[session]', session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('[JWT triggered]');
      return token;
    },
  },
});
