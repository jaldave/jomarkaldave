import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { person, profile } from "@/content/portfolio";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const title = `${person.name} | ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: `${profile.tagline}. ${profile.summary}`,
  openGraph: { title, description: profile.tagline, type: "profile" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
