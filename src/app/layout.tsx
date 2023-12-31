import AdminUrlsLinks from "@/components/AdminUrls";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/graphql/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Admin",
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
        <Providers>
          <div className="my-2 mx-auto w-10/12 border border-gray-300 p-4 rounded-md">
            <header className="flex items-center justify-between py-2">
              <h1 className="font-bold text-4xl">Admin Dashboard</h1>
              <div className="flex items-center space-x-3">
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-lg"
                />
                <button className="border border-gray-300 p-2 rounded-lg bg-main_pink text-white">
                  make query
                </button>
              </div>
            </header>

            <div className="my-6">
              <AdminUrlsLinks />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
