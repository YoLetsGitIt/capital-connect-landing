import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
