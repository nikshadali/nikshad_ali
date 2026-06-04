import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display / headings — geometric, modern, prestigious
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Body — clean, neutral, highly legible
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Code snippets
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nikshad Ali — Senior Frontend Engineer | React & Next.js",
  description: "Meta-certified Senior Frontend Engineer. Built Paygex, SubTV, FutureAxis. 4+ years · React · Next.js · TypeScript · Remote.",
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
