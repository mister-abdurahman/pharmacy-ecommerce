import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import useProducts from "@/hooks/queries/useProducts";
import { getProducts } from "@/lib/actions";
import Categorys from "@/ui/Home/Categorys";
import Hero from "@/ui/Home/Hero";
import MakePrescription from "@/ui/Home/MakePrescription";
import OfferCards from "@/ui/Home/OfferCards";
import ProductHighlight from "@/ui/Home/ProductHighlight";
import ProductWidget from "@/ui/Home/ProductWidget";
import Stats from "@/ui/Home/Stats";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page() {
  const a = await fetch("http://localhost:3000/api/hello");
  const b = await a.json();
  console.log("aaaaaaaaaaaaa:", b);
  return (
    <div className="">
      <Hero />
      <div className="mx-10">
        <OfferCards />
        <Suspense fallback={<Spinner />}>
          <ProductHighlight heading="New Products" />
        </Suspense>
        <ProductHighlight
          outerStyle="mt-6 sm:mt-0"
          heading="Popular Products"
        />
        {/* <Categorys /> */}
        <ProductWidget />
        <ProductHighlight outerStyle="mt-6" heading="Upcoming Products" />
        <Stats />
      </div>
      <MakePrescription />
    </div>
  );
}
