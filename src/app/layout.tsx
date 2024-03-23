import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/widgets/header"
import Footer from "@/components/widgets/footer";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "PBL Market",
  description: "PBL : After Market App with Next, Prisma, PostgreSQL",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  console.log('currentUser: ', currentUser);

  return (
    <html lang="ko">
      <body className={`${true && 'darkTheme'}`}>
          <Header currentUser={currentUser} />
          <section className="block w-full max-w-3xl h-auto m-auto py-20 px-4">
            { children }
          </section>
          <Footer />
      </body>
    </html>
  );
}
