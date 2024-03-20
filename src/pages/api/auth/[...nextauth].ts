import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@helpers/prismadb"
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('credentials: ', credentials);
        console.log('req: ', req);
        if (!credentials?.email || credentials.password === null) {
          throw new Error('Invalid credentials');
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user || user.hashedPw === null) {
          throw new Error('Invalid credentials');
        }
        const isCorrectPw = await bcrypt.compare(credentials.password, user.hashedPw);
        if (!isCorrectPw) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/login'
  },
  jwt: { 
    secret: process.env.JWT_SECRET, 
    maxAge: 30 * 24 * 60 * 60 // 30day
  },
  callbacks: {
    jwt: async ({ token, user }) => Object.assign(token, user),
    session: async ({ session, token }) => (session.user = token, session),
  }
}

export default NextAuth(authOptions);