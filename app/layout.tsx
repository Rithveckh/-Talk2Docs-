import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider,SignInButton,SignUpButton,SignedIn,SignedOut,UserButton,} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "📚Talk2Docs📚",
  description: "AI document parser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen h-screen overflow-hidden flex flex-col">
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
