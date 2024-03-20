'use client'
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface NavProps {
  currentUser?: User | null
}

export default function Nav({ currentUser }: NavProps) {
  
  return (
    <ul className="flex justify-end items-center gap-2">
      <li><Link href='/admin'>admin</Link></li>
      <li><Link href='/user'>user</Link></li>
      {
        currentUser
        ? <li><button type="button" onClick={() => signOut()}>logout</button></li>
        : <>
            <li><Link href='/auth/login'>login</Link></li>
            <li><Link href='/auth/register'>register</Link></li>
          </>
      }
    </ul>
  )
}
