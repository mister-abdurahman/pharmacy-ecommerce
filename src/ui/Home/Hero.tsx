import Image from "next/image";
import React from "react";
import docPic from "@/assets/images/figmadoc.png";
import { Button } from "@/components/ui/button";
import { FaBagShopping } from "react-icons/fa6";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative mt-2 bg-heroImage sm:bg-none sm:bg-primary w-full h-80">
      <div className="flex flex-col items-start absolute z-10 top-1/2 -translate-y-1/2 left-4">
        <h1 className="text-4xl font-semibold text-white sm:mb-1 mb-3">
          Get Affordable <br className="block sm:hidden" /> Health Solutions
        </h1>
        <p className="sm:block hidden w-1/2 text-white text-sm mb-3">
          Elevate your health journey with exclusive discounts and unparalleled
          convenience. Your path to well-being starts here, where every purchase
          is a prescription for savings.
        </p>
        <Link href="/products">
          <Button className="flex items-center bg-black hover:bg-gray-700">
            <FaBagShopping /> Start Shopping{" "}
          </Button>
        </Link>
      </div>
      <Image
        quality={100}
        src={docPic}
        alt="Picture of doctor in pharmacy"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-4 w-[23rem]"
      />
    </div>
  );
}

export default Hero;
