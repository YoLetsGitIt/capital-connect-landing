import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import Navbar from "./components/Navbar";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capital Connect",
  description: "Making property deals happen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmsans.variable}`}>
      <body>
        <KumaRegistry>{children}</KumaRegistry>
      </body>
    </html>
  );
}
