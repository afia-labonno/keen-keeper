import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import TimelineProvider from "@/context/TimelineContext";
import FriendProvider from "@/context/FriendContext";
import Footer from "@/Component/Shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "A website to keep closest person",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <FriendProvider>
          <TimelineProvider>
            <Navbar />
            {children}
            <Footer/>
            <ToastContainer />
          </TimelineProvider>
        </FriendProvider>
      </body>
    </html>
  );
}
