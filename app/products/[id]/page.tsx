"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { Product } from "@/lib/interfaces";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProduct } from "@/lib/data";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(params?.id);
        setProduct(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params?.id]);

  const { addToCart, removeFromCart, cart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product?.id!,
      title: product?.title!,
      price: product?.price!,
      quantity: 1,
    });
  };

  const isInCart = cart.some((item) => item.id === product?.id);
  return (
    <div className="container">
      <Navbar />
      <section className="py-12">
        <Link
          href="/products"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <ArrowLeft />
          Back to products
        </Link>
      </section>
      {isLoading ? (
        <section className="py-20">
          <p>Loading...</p>
        </section>
      ) : (
        product && (
          <section className="grid md:grid-cols-2 justify-center items-center gap-8 py-20">
            <Image
              src={product?.image || "/placeholder.png"}
              width={300}
              height={400}
              alt={product?.title || "Product"}
              className="object-contain"
            />
            <div className="space-y-4">
              <h3 className="font-semibold text-2xl">{product?.title}</h3>
              <p className="text-sm text-gray-600">{product?.description}</p>
              <p className="text-sm text-gray-600">{product?.category}</p>
              <p className="font-bold text-4xl mt-2">
                Ksh {product?.price.toFixed(2)}
              </p>
              {isInCart ? (
                <Button
                  className="mt-10 w-fit"
                  onClick={() => removeFromCart(product?.id!)}
                  variant="destructive"
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  className="mt-10 w-fit"
                  onClick={handleAddToCart}
                  disabled={isInCart}
                >
                  Add to cart
                </Button>
              )}
            </div>
          </section>
        )
      )}
      <Footer />
    </div>
  );
}
