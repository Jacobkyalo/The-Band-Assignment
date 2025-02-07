"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/lib/axios";

const addProductFormSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter product title",
  }),
  description: z.string().min(1, {
    message: "Please enter product description",
  }),
  image: z.string().min(1, {
    message: "Please choose product image url",
  }),
  price: z.string().min(1, {
    message: "Please enter product price",
  }),
  category: z.string().min(1, {
    message: "Please select product category",
  }),
});

export const ProductAddForm = () => {
  const form = useForm<z.infer<typeof addProductFormSchema>>({
    resolver: zodResolver(addProductFormSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      category: "",
      price: "",
    },
  });
  const [addingProduct, setAddingProduct] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof addProductFormSchema>) => {
    try {
      setAddingProduct(true);
      await apiUrl.post(`/products`, data);
      setAddingProduct(false);
      toast({
        title: "Success",
        description: "Product added successfully",
      });
      router.push(`/dashboard/products`);
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Something went wrong, Please try again",
        variant: "destructive",
      });
      setAddingProduct(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full my-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product title</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Product title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product price (Ksh)</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Product price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product category</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Product category"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product image</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Product image url"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid sm:grid-cols-2 mt-4 gap-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Product description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={addingProduct}
          aria-disabled={addingProduct}
          className="my-6"
        >
          <PlusCircle size={14} />
          {addingProduct ? "Adding..." : "Add product"}
        </Button>
      </form>
    </Form>
  );
};
