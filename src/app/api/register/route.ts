import bcrypt from 'bcryptjs';
import prisma from '@/helpers/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  const body = await req.json();
  const { email, name, password } = body;
  const hashedPw = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { email, name, hashedPw }
  });

  return NextResponse.json(user);
}