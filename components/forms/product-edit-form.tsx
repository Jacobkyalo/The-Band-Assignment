"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PenBox } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/interfaces";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "../ui/textarea";
import { apiUrl } from "@/lib/axios";
import { getProduct } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProductEditForm = ({
  params,
}: {
  params: { id: string | number };
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product, setProduct] = useState<Product | undefined>();
  const [updatingProduct, setUpdatingProduct] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const getCurrentProduct = async () => {
      const product = await getProduct(params?.id);
      setProduct(product);
      setTitle(product?.title);
      setImage(product?.image);
      setCategory(product?.category);
      setPrice(product?.price.toString());
      setDescription(product?.description);
    };

    getCurrentProduct();
  }, [params?.id]);

  const updateProductDetails = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setUpdatingProduct(true);
      await apiUrl.patch(`/products/${params?.id}`, {
        title,
        price,
        description,
        image,
        category,
      });
      setUpdatingProduct(false);
      toast({
        title: "Success",
        description: "Product updated successfully",
      });
      router.push(`/dashboard/products/${product?.id}`);
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Something went wrong, Please try again",
        variant: "destructive",
      });
      setUpdatingProduct(false);
    }
  };

  return (
    <form className="w-full space-y-6 my-6" onSubmit={updateProductDetails}>
      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        <div>
          <Label className="block mb-3">Product title</Label>
          <Input
            type="text"
            placeholder="Product name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="w-full"
            defaultValue={title}
          />
        </div>
        <div>
          <Label className="block mb-3">Product price</Label>
          <Input
            type="text"
            placeholder="Product price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
            className="w-full"
            defaultValue={price}
          />
        </div>
        <div>
          <Label className="block mb-3">Product category</Label>
          <Input
            type="text"
            placeholder="Product category"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
            className="w-full"
            defaultValue={category}
          />
        </div>

        <div>
          <Label className="block mb-3">Product image</Label>
          <div className="flex items-center-gap-2">
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-10 w-10 !rounded-md">
                <AvatarImage src={image} alt={title} />
                <AvatarFallback className="!rounded-md uppercase">
                  {title?.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </Button>
            <Input
              type="text"
              placeholder="Product position"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.value)
              }
              className="w-full"
              defaultValue={image}
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <Label className="block mb-3">Product description</Label>
          <Textarea
            placeholder="Product description"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            rows={5}
            className="w-full"
            defaultValue={description}
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={updatingProduct}
        aria-disabled={updatingProduct}
      >
        <PenBox size={14} />
        {updatingProduct ? "Updating..." : "Update product"}
      </Button>
    </form>
  );
};
