import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Migrate Mate | Profile"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable}`,`${geistMono.variable}`,`${dmSans.variable}`, `antialiased`)}
      >
        {children}
      </body>
    </html>
  );
}
