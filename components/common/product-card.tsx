"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export const ProductCard = ({
  product,
  viewMode,
}: {
  product: Product;
  viewMode: string;
}) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      quantity: 1,
    });
  };

  const isInCart = cart.some((item) => item.id === product?.id);

  return (
    <div
      key={product?.id}
      className={`bg-white p-4 rounded-lg shadow ${
        viewMode === "list" ? "flex items-center gap-4" : ""
      }`}
    >
      <Link href={`/products/${product?.id}`} key={product?.id}>
        <div
          className={`${
            viewMode === "grid" ? "aspect-square mb-4" : "w-24 h-24"
          } rounded-md overflow-hidden`}
        >
          <Image
            width={300}
            height={400}
            src={product?.image || "/placeholder.png"}
            alt={product?.title}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <div className={viewMode === "list" ? "flex-1" : ""}>
        <h3 className="font-semibold truncate">{product?.title}</h3>
        <p className="text-sm text-gray-600">{product?.category}</p>
        <p className="font-bold mt-2">Ksh {product?.price.toFixed(2)}</p>

        {isInCart ? (
          <Button
            className="mt-2 w-full"
            onClick={() => removeFromCart(product?.id)}
            variant="destructive"
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            className="mt-2 w-full"
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};
