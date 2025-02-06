import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r rounded-xl from-green-600 to-primary text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <Badge className="bg-white text-green-600">New Arrivals</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Macbook M4: Technology redefined
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span>100% original and authentic macbooks</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span>Powerful, full-bodied to handle heavy tasks</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span>Ethically sourced from apple manufacturers</span>
              </li>
            </ul>
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
            <h3 className="text-2xl font-semibold">Exclusive Laptops Offers</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-lg font-medium">
                  Buy 1 Get a free mouse and a laptop bag
                </p>
                <p className="text-sm opacity-80">
                  Authentic handcrafted Apple product
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-lg font-medium">15% Off on full purchase</p>
                <p className="text-sm opacity-80">
                  Experience the new technology era
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-lg font-medium">Free Delivery in Nairobi</p>
                <p className="text-sm opacity-80">
                  Shop local, delivered to your doorstep.
                </p>
              </div>
            </div>
            <p className="text-sm italic">
              *Offers valid while stocks last. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
