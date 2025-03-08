import "@/styles/globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Milkshake",
  description: "Code snippet sharing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <Link href="/" className="flex items-center space-x-2">
                <CodeIcon className="h-6 w-6" />
                <span className="font-bold">Code Milkshake</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2">
              <nav className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Code Milkshake. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
