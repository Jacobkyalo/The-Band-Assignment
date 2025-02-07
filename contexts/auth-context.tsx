"use client";

import type React from "react";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/lib/interfaces";
import { toast } from "@/hooks/use-toast";
import { apiUrl } from "@/lib/axios";

interface AuthContextType {
  user: User | undefined;
  loginLoading: boolean;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await apiUrl.get("/users/1");

        setUser(data);
      } catch (err: any) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  const loginUser = async (username: string, password: string) => {
    try {
      setLoginLoading(true);
      const { data } = await apiUrl.post("/auth/login", {
        username,
        password,
      });
      sessionStorage.setItem("token", data?.token);
      toast({
        title: "Login Success",
        description: "Login successful",
      });

      setLoginLoading(false);
      router.push("/dashboard");
    } catch (err: any) {
      toast({
        title: "Login Error",
        description:
          err?.response?.data?.message ||
          "An error occurred login, try again/Invalid credentials",
        variant: "destructive",
      });
      setLoginLoading(false);
    }
  };

  const logoutUser = () => {
    sessionStorage.removeItem("token");
    toast({
      title: "Logout Success",
      description: "Logout successful",
    });
    router.push("/admin");
  };

  return (
    <AuthContext.Provider value={{ user, loginLoading, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
