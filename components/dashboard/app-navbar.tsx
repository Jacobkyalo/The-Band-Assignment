"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/use-auth";

export const AppNavbar = () => {
  const { user, logoutUser } = useAuth();
  return (
    <header className="flex sticky bg-background top-0 z-50  w-full items-center justify-between p-4 border-b">
      <div className="flex items-center gap-x-3">
        <SidebarTrigger />
        <h2 className="font-bold text-lg capitalize sm:text-xl text-foreground">
          Welcome, Admin
        </h2>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/assets/avatars/avatar2.jpg" alt="admin" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none capitalize">
                {user?.name?.firstname} {user?.name?.lastname}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email || "admin@thebandshop.com"}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard">
              <DropdownMenuItem className="gap-2">
                <LayoutDashboard size={16} />
                Dashboard
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/products">
              <DropdownMenuItem className="gap-2">
                <ShoppingBasket size={16} />
                Products
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="gap-2" onClick={() => logoutUser()}>
              <LogOut size={16} />
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
