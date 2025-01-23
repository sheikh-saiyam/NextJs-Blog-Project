import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog",
  description: "Generated by create next app",
  icons: {
    icon:"./next.svg",
    shortcut:"./next.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-11/12 md:w-10/12 lg:w-9/12 mx-auto max-w-screen-xl`}
      >
        <Navbar />
        <div className="pt-8 pb-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
