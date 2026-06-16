import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center mt-15 ">
      <Card className="w-full max-w-sm shadow-sm">
        <CardHeader>
          <CardTitle>
            Create Your{" "}
            <Link href="/">
              <span className="text-olive-700 font-bold">MO</span>BLOG
            </Link>{" "}
            Account
          </CardTitle>

          <CardDescription>
            Please Enter your email to start creating your account
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
              <div className="grid gap-2">
                <Label>Gender</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Gender</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="start">
                    <DropdownMenuLabel>Gender</DropdownMenuLabel>
                    <DropdownMenuItem>Male</DropdownMenuItem>
                    <DropdownMenuItem>Female</DropdownMenuItem>
                    <DropdownMenuItem>Other</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Separator />
              <button className={buttonVariants()}>Sign Up</button>

              <button className={buttonVariants({ variant: "secondary" })}>
                Sign Up with Google
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
