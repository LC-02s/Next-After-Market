import Link from "next/link";
import Nav from "./nav";
import { User } from "@prisma/client";

interface HeaderProps {
  currentUser?: User | null
}

export default function Header({ currentUser }: HeaderProps) {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 w-full max-w-screen-xl flex justify-between items-center p-4 m-auto border-b border-gray-200 bg-gray-000">
      <h1 className="block font-extrabold text-gray-900">
        <Link href='/'>LOGO</Link>
      </h1>
      <Nav currentUser={currentUser} />
    </div>
  )
}
