"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import { MdShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MyContext } from "@/store/store";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

interface IProps {
  img_url: string;
  name: string;
  price: number;
  id: number;
  status: boolean;
}

function ProductCard({ img_url, name, price, id, status }: IProps) {
  const navigate = useRouter();
  const { addItemToCart, cart } = useContext(MyContext);

  function handleAddToCart() {
    const as = cart.find((a) => a.name === name);
    if (as)
      return toast({
        title: "Item already in cart",
        description: "Want to go checkout ?",
        action: (
          <ToastAction
            onClick={() => navigate.push("/cart")}
            altText="Go to cart to checkout"
          >
            YES
          </ToastAction>
        ),
      });

    addItemToCart({
      name,
      price,
      quantity: 1,
      img_url,
      id,
    });
    // alert("Item added to cart");
    toast({
      title: "Item added to cart",
      description: "Want to go checkout ?",
      action: (
        <ToastAction
          onClick={() => navigate.push("/cart")}
          altText="Go to cart to checkout"
        >
          YES
        </ToastAction>
      ),
    });
  }
  return (
    <div className="w-[14rem] h-[19rem] hover:shadow-xl flex flex-col rounded-md items-stretch relative group">
      {!status && (
        <span className="absolute top-3 left-3 bg-gray-300 rounded-md p-2 text-xs">
          Out of Stock
        </span>
      )}
      <Image
        alt="product image"
        src={img_url}
        objectFit="cover"
        objectPosition="center"
        width={200}
        height={200}
        className="w-full h-[14rem] aspect-square"
      />
      <div className="space-y-2 pt-2 pb-1 pl-2 border-t border-gray-400">
        <p className="text-[15px] font-bold">{name}</p>
        <p className="text-[13px]">₦{price}</p>
      </div>

      <div className="group-hover:flex sm:hidden flex">
        <Button
          onClick={() => navigate.push(`/products/${id}`)}
          className="w-full mt-auto rounded-t-none text-black rounded-br-none rounded-bl-lg bg-gray-300 hover:bg-gray-500"
        >
          View <FaEye className="fill-black hover:fill-white" />
        </Button>
        <Button
          disabled={!status}
          onClick={() => handleAddToCart()}
          className={`w-full mt-auto rounded-t-none rounded-bl-none rounded-br-lg bg-green-500 hover:bg-brand_green_700 ${
            !status && "hover:cursor-not-allowed"
          }`}
        >
          Add to Cart <MdShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
