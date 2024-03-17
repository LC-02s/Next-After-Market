'use client'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/widgets/header"
import Footer from "@components/widgets/footer";
import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "PBL Market",
//   description: "PBL : After Market App with Next, Prisma, PostgreSQL",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="pt-16">
        <SessionProvider>
          <Header />
          { children }
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
