import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="px-10 pt-5">
          <Link prefetch href="/" className="text-2xl font-semibold">
            Marshal <span className="text-teal-500">DB</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
