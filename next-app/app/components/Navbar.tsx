import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-10 h-10 items-center text-gray-50 mb-4 bg-gray-800 rounded-2xl shadow-xl">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-olive-900">MO</span>BLOG
        </Link>

        <div className="flex gap-5">
          <Link href="">Home</Link>
          <Link href="/about">About</Link>
          <Link href="">Blog</Link>
        </div>

        <div className="flex gap-6">
          <Link
            href="/signUp"
            className={buttonVariants({ variant: "secondary" })}
          >
            SignUp
          </Link>

          <Link href="" className={buttonVariants({ variant: "default" })}>
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
