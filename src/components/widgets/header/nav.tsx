import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Nav() {
  
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <ul className="flex justify-end items-center gap-2">
      <li><Link href='/admin'>admin</Link></li>
      <li><Link href='/user'>user</Link></li>
      {
        status === 'authenticated'
        ? <li><button type="button" onClick={() => signOut()}>logout</button></li>
        : <>
            <li><button type="button" onClick={() => signIn()}>login</button></li>
            <li><Link href='/auth/register'>register</Link></li>
          </>
      }
    </ul>
  )
}
