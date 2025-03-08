import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Share Your Code Snippets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Store, share, and discover code snippets with the developer
              community.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/dashboard">
              <Button>Browse Snippets</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Share Your Code</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
