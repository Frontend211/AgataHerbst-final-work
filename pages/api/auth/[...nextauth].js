import NextAuth from 'next-auth/next';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }) 
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    // console.debug('>> callback signIn', { user, account, profile, email, credentials });
    return true;
  },
  async redirect({ url, baseUrl }) {
    // console.debug('>> callback redirect', { url, baseUrl });
    return baseUrl;
  },
  async session({ session, user, token }) {
    // console.debug('>> callback session', { session, user, token });
    session.user.id = user.id;
    session.user.role = user.role;
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    // console.debug('>> callback jwt', { token, user, account, profile, isNewUser });
    return token;
  }
}
};

const resf = NextAuth(authOptions);

export default (...params) => {
const [req] = params;
// console.log('pages/api/auth/[...nextauth].js ');
// console.log('>> ', req.method, ' запрос на', req.url, req.query);
return resf(...params);
};