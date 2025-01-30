import { Button } from "@/components/ui/button";
import { getCartByUserId } from "@/services/apiCart";
import CartTable from "@/ui/Cart/CartTable";
import ProfileCartAction from "@/ui/Profile/ProfileCartAction";
import Link from "next/link";
import React from "react";

async function page() {
  // const cart  = await getCartByUserId(params.id)
  return (
    <div className="flex flex-col gap-6 items-center py-4">
      <CartTable />
      <ProfileCartAction />
    </div>
  );
}

export default page;
