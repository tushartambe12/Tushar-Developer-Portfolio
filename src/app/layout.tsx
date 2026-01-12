import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tushar Developer | Full-Stack Developer & UI Designer",
  description:
    "Premium developer portfolio showcasing modern web development skills, featuring Next.js, React, TypeScript, and more.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Tushar Developer" }],
  openGraph: {
    title: "Tushar Developer | Full-Stack Developer",
    description: "Premium developer portfolio",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-slate-950`}
      >
        {/* Background gradient effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>
        {children}
      </body>
    </html>
  );
}
