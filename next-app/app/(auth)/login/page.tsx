import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center mt-20 ">
      <Card className="w-full max-w-sm shadow-sm">
        <CardHeader>
          <CardTitle>
            Login to Your{" "}
            <Link href="/" className="text-gray-600">
              <span className="text-slate-800 font-bold">MO</span>BLOG
            </Link>{" "}
            Account
          </CardTitle>
          <CardDescription>
            Please Enter your email and name or Continue with Google
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action="">
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">Name</Label>
                <Input id="username" type="text" placeholder="John Doe" />
              </div>

              <Separator />
              <button className={buttonVariants()}>Login</button>

              <button className={buttonVariants({ variant: "secondary" })}>
                Login with Google
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
