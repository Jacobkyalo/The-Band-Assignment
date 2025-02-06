import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheBandShop",
  description: "The Band Shop with Products Listings and Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
