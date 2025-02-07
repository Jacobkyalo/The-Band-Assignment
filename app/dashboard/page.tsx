"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusCircle, ShoppingBag, ShoppingBasket, Wallet } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/interfaces";
import { getCategories, getProducts } from "@/lib/data";
import { RecentProduct } from "@/components/dashboard/recent-product";
import { Categories } from "@/components/dashboard/categories";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any>([]);

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error: any) {}
  };

  const fetchCategories = async () => {
    try {
      const categories = await getCategories();
      setCategories(categories);
    } catch (error: any) {}
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const totals = products.reduce(
    (acc, product) => {
      acc.totalPrice += Number(product.price);
      return acc;
    },
    { totalPrice: 0 }
  );

  return (
    <div className="h-full">
      <div className="space-y-6">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
          <Link
            href={"/dashboard/products/add"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <PlusCircle className="h-4 w-4" /> Add Product
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Categories
              </CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{categories?.length | 0}</div>
              <p className="text-xs text-muted-foreground">
                Active on the platform
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <ShoppingBasket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products?.length | 0}</div>
              <p className="text-xs text-muted-foreground">
                Listed across the platform
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Value of products
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                Ksh {totals?.totalPrice.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Across all the platform
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Some of the products categories</CardDescription>
            </CardHeader>
            <CardContent>
              {categories?.map((category: string, index: number) => (
                <Categories key={index} category={category} />
              ))}
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
              <CardDescription>
                Some of the recently listed products
              </CardDescription>
            </CardHeader>
            <CardContent>
              {products?.slice(0, 5)?.map((product: Product) => (
                <RecentProduct key={product?.id} product={product} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
