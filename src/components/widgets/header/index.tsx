import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full max-w-screen-xl flex justify-between items-center p-4 m-auto border-b border-gray-200 bg-[var(--grsc-000)]">
      <h1 className="block font-extrabold text-gray-900">
        <Link href='/'>LOGO</Link>
      </h1>
      <Nav />
    </div>
  )
}
