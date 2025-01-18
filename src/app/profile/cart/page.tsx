import { Button } from "@/components/ui/button";
import { getCartByUserId } from "@/services/apiCart";
import CartTable from "@/ui/Cart/CartTable";
import Link from "next/link";
import React from "react";

async function page() {
  // const cart  = await getCartByUserId(params.id)
  return (
    <div className="flex flex-col gap-6 items-center py-4">
      <CartTable />
      <div className="flex gap-4">
        <Link href={"/products"}>
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link href={"/cart"}>
          <Button>Prepare To Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

export default page;
