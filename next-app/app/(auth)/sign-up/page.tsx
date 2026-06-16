"use client";

import { SignUpSchema } from "@/app/schemas/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(SignUpSchema as any),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  function onSubmit() {
    console.log("yoo")
  }

  return (
    <div className="flex justify-center items-center mt-15 ">
      <Card className="w-full max-w-sm shadow-sm">
        <CardHeader>
          <CardTitle>
            Create Your{" "}
            <Link href="/" className="text-gray-600">
              <span className="text-slate-800 font-bold">MO</span>BLOG
            </Link>{" "}
            Account
          </CardTitle>

          <CardDescription>
            Please Enter your email to start creating your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-y-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Full name</FieldLabel>
                    <Input aria-invalid={fieldState.invalid} placeholder="John Doe" {...field} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input 
                      aria-invalid={fieldState.invalid}
                      placeholder="johndoe@gmail.com"
                      type="email"
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input aria-invalid={fieldState.invalid} placeholder="*******" type="password" {...field} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <div className="flex flex-col w-full gap-2">
              <Separator className="mt-3" />
              <Button className={buttonVariants({ variant: "default" })}>
                Sign up
              </Button>

              <Button className={buttonVariants({ variant: "secondary" })}>
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
