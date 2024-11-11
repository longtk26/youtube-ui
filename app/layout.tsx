import type { Metadata } from "next";
import "./globals.css";
import Header from "@/containers/Header/Header";

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="font-roboto h-screen w-full bg-black">
        {children}
      </body>
    </html>
  );
}
