import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com', role: 'user' }
        return user ? user : null;
      }
    })
  ],
  session: { strategy: 'jwt' },
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