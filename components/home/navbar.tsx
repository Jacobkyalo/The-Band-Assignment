"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignJustify, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/lib/interfaces";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

const links: NavLink[] = [
  {
    link: "/products",
    text: "Products",
  },
  {
    link: "#",
    text: "About Us",
  },
  {
    link: "#",
    text: "Contact Us",
  },
];

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <header className="flex items-center sticky top-0 z-30 bg-white justify-between py-4">
      <h1 className="font-bold text-3xl">TheBandShop</h1>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8">
          {links?.map((link: NavLink, index: number) => (
            <li key={index}>
              <Link href={link?.link}>{link?.text}</Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <ShoppingCart />
          <span
            className={cn(
              isAnimating ? "animate-ping" : "",
              "absolute -top-2 -right-2 bg-primary text-white text-sm rounded-full w-5 h-5 flex items-center justify-center"
            )}
          >
            {cartCount}
          </span>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="!text-left">
                <SheetTitle>
                  <h1 className="font-bold text-3xl">TheBandShop</h1>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-8 mt-10">
                {links?.map((link: NavLink, index: number) => (
                  <li key={index}>
                    <Link href={link?.link}>{link?.text}</Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
