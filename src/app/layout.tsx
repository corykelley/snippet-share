import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "@/styles/globals.css";
import Link from "next/link";
import { Milk, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Code Milkshake",
  description: "Code snippet sharing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen flex-col">
          <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container mx-auto flex h-14 items-center">
              <div className="mr-4 flex">
                <Link href="/" className="flex items-center space-x-2">
                  <Milk className="h-6 w-6" />
                  <span className="font-bold">Code Milkshake</span>
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-end space-x-2">
                <nav className="flex items-center space-x-2">
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <Link href="#">
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Snippet
                      </Button>
                    </Link>
                    <UserButton />
                  </SignedIn>
                </nav>
              </div>
            </div>
          </header>
          <main className="container mx-auto flex-1">{children}</main>
          <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Code Milkshake. All rights
                reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
