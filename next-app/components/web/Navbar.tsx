import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-10 h-10 items-center text-gray-50 mb-4 rounded-2xl shadow-sm">
      <Link href="/" className="text-3xl font-bold text-gray-600">
        <span className="text-slate-800">MO</span>BLOG
      </Link>
      <div className="flex gap-5">
        <Link href="" className={buttonVariants({ variant: "ghost" })}>
          Home
        </Link>
        <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
          Blog
        </Link>
        <Link href="" className={buttonVariants({ variant: "ghost" })}>
          Create
        </Link>
      </div>
      <div className="flex gap-6">
        <Link
          href="/sign-up"
          className={buttonVariants({ variant: "secondary" })}
        >
          SignUp
        </Link>
        <Link href="/login" className={buttonVariants({ variant: "default" })}>
          Login
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
