import React from "react";
import garlic from "@/assets/images/garlic.png";
import dental from "@/assets/images/dental.png";
import banana_cream from "@/assets/images/banana cream.png";
import Image from "next/image";

function ProductWidget() {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="bg-blue-100 flex justify-between items-center basis-1/2 p-8 rounded-md">
        <div className="flex flex-col gap-4">
          <p className="uppercase bg-green-500 rounded-md text-white w-fit p-2 text-xs">
            25% off
          </p>
          <h4 className="uppercase text-xl font-semibold">Black Garlic oil</h4>
          <p className="font-semibold">
            Stronger and Thicker <br /> Hair With Black Garlic Oil.
          </p>
          <span className="text-xs line-through">$37.00</span>
          <div className="flex gap-4 items-center">
            <h3 className="font-bold text-xl">$37.00</h3>
            <p className="text-xs">including tax</p>
          </div>
        </div>
        <Image src={garlic} className="w-1/3" alt="Product Image" />
      </div>
      <div className="flex flex-col basis-full sm:basis-1/2 gap-2">
        <div className="bg-yellow-100 basis-full sm:basis-1/2 flex justify-between items-center p-5">
          <div className="flex flex-col gap-4">
            <p className="uppercase bg-green-500 rounded-md text-white w-fit p-2 text-xs">
              25% off
            </p>
            <h4 className="uppercase text-xl font-semibold">
              Black Garlic oil
            </h4>
            <p className="font-semibold">
              Stronger and Thicker <br /> Hair With Black Garlic Oil.
            </p>
            <span className="text-xs line-through">$37.00</span>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$37.00</h3>
              <p className="text-xs">including tax</p>
            </div>
          </div>
          <Image src={dental} className="w-1/3" alt="Product Image" />
        </div>
        <div className="bg-green-100 basis-full sm:basis-1/2 flex justify-between items-center p-5">
          <div className="flex flex-col gap-4">
            <p className="uppercase bg-green-500 rounded-md text-white w-fit p-2 text-xs">
              25% off
            </p>
            <h4 className="uppercase text-xl font-semibold">
              Black Garlic oil
            </h4>
            <p className="font-semibold">
              Stronger and Thicker <br /> Hair With Black Garlic Oil.
            </p>
            <span className="text-xs line-through">$37.00</span>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$37.00</h3>
              <p className="text-xs">including tax</p>
            </div>
          </div>
          <Image src={banana_cream} className="w-1/3" alt="Product Image" />
        </div>
      </div>
    </div>
  );
}

export default ProductWidget;
