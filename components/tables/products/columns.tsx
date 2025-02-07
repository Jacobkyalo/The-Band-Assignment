"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/lib/interfaces";
import { CellAction } from "./cell-action";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Product ID",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div>{row.getValue("id")}</div>
      </div>
    ),
  },

  {
    accessorKey: "image",
    header: "Product image",
    cell: ({ row }) => (
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-10 w-10 !rounded-md">
          <AvatarImage
            src={row.getValue("image")}
            alt={row.getValue("title")}
          />
          <AvatarFallback className="!rounded-md uppercase">
            {(row.getValue("title") as string).slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </Button>
    ),
  },
  {
    accessorKey: "title",
    header: "Product title",
    cell: ({ row }) => (
      <div> {(row.getValue("title") as string).slice(0, 20) + "..."}</div>
    ),
  },

  {
    accessorKey: "category",
    header: "Product category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "price",
    header: "Product price (Ksh)",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    accessorKey: "description",
    header: "Product description",
    cell: ({ row }) => (
      <div className="truncate">
        {(row.getValue("description") as string).slice(0, 35) + "..."}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CellAction product={row.original} />,
  },
];
