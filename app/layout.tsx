import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VouchBotIcon from "@/components/VouchBotIcon";


export const metadata: Metadata = {
  title: "Vouchlux - Where Trust Becomes Home",
  description: "Luxury real estate development and investment in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className={`antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <VouchBotIcon />
      </body>
    </html>
  );
}
