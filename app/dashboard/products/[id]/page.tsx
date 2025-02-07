"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PenBox, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/interfaces";
import { deleteProduct, getProduct } from "@/lib/data";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SingleProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | undefined>();
  const [deletingProduct, setDeletingProduct] = useState<boolean>(false);
  const [gettingProduct, setGettingProduct] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const deleteCurrentProduct = async (e: any) => {
    e.preventDefault();

    try {
      setDeletingProduct(true);
      await deleteProduct(params?.id);
      setDeletingProduct(false);
      toast({
        title: "Success",
        description: "Product deleted succesfully",
      });
      router.push("/dashboard/products");
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.product ||
          "Something went wrong, Please try again",
        variant: "destructive",
      });
      setDeletingProduct(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentProduct = async () => {
    try {
      setGettingProduct(true);
      const product = await getProduct(params?.id);
      setProduct(product);
      setGettingProduct(false);
    } catch (error: any) {
      setError("Error occurred when getting product");
      setGettingProduct(false);
    }
  };

  useEffect(() => {
    getCurrentProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Product Deatils
          </h2>
          <p className="text-sm text-muted-foreground tracking-tight">
            View product details here
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Image
          src={product?.image! || "/placeholder.png"}
          alt={product?.title!}
          width={200}
          height={250}
          className="rounded-lg mb-6"
        />
        <div className="flex flex-col gap-y-1 my-6">
          <div className="flex items-center gap-x-2">
            <strong>Product title:</strong>
            <span className="text-muted-foreground capitalize">
              {product?.title}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <strong>Product price:</strong>
            <span className="text-muted-foreground capitalize">
              Ksh {product?.price}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <strong>Product category:</strong>
            <span className="text-muted-foreground">{product?.category}</span>
          </div>
          <div className="flex items-center flex-wrap gap-x-2">
            <strong>Product description:</strong>
            <span className="text-muted-foreground">
              {product?.description}
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-8">
            <Link
              href={`/dashboard/products/${product?.id}/edit`}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <PenBox className="h-4 w-4" /> Update product
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" type="button">
                  <Trash className="h-4 w-4" /> Delete product
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this product
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-white"
                    type="button"
                    onClick={deleteCurrentProduct}
                    disabled={deletingProduct}
                    aria-disabled={deletingProduct}
                  >
                    {deletingProduct ? "Deleting..." : "Delete"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
