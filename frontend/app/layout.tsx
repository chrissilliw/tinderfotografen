import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import { Sen } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation/Navbar";
import { getGlobalPageMetadata } from "@/services/loaders/fetchGlobalData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();
  console.log("Metadata: ", metadata);
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${lora.variable} ${sen.variable} font-sans`}
      >
        <div className="min-h-screen">
          {/* <div className="flex min-h-screen flex-col items-center p-24"> */}{" "}
          <Navbar />
          {children}
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
