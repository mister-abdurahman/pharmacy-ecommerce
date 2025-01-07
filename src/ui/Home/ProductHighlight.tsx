import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import useProducts from "@/hooks/queries/useProducts";
import { MyContext } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { getProducts } from "@/services/apiProducts";

async function ProductHighlight({
  heading,
  outerStyle,
}: {
  heading: string;
  outerStyle?: string;
}) {
  // const { isLoading, products, error } = useProducts();
  const products = await getProducts();

  // if (error)
  //   return <h1 className="text-4xl">AN ERROR OCCURED: {error.message}</h1>;
  // if (isLoading) return <Spinner />;
  return (
    <div className={`pb-8 sm:pb-14 ${outerStyle}`}>
      <div className="flex justify-between mb-4">
        <h4 className="text-base font-bold">{heading}</h4>
        <p className="text-green-700 text-sm">
          <Link href={"/products"}>View All &rarr;</Link>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-2 items-center justify-center sm:justify-between">
        {products.map((el, i) => (
          <ProductCard
            key={i}
            id={el.id}
            imageUrl={el.img_url}
            price={el.price}
            name={el.name}
            status={el.status}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductHighlight;
