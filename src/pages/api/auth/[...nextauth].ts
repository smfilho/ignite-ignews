import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      try {
        await fauna.query(q.Create(q.Collection('users'), { data: { email } }));

        return true;
      } catch {
        return false;
      }
    },
  },

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
