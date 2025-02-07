"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";

const FormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required.",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { loginUser, loginLoading } = useAuth();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const { username, password } = data;
    loginUser(username, password);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="shadow-md w-full max-w-md border rounded-lg space-y-6 px-4 py-8"
        >
          <div className="mb-6 text-center">
            <h3 className="font-bold text-4xl">Login</h3>
            <p className="text-muted-foreground text-sm">
              Enter admin details to login
            </p>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loginLoading} className="w-full">
            {loginLoading ? "Please wait..." : "Login"}
          </Button>
        </form>
      </Form>
    </>
  );
};
