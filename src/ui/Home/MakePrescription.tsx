import Image from "next/image";
import React from "react";
import drugImage from "@/assets/images/Group 346.png";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "@/components/PrescriptionModal";

function MakePrescription() {
  return (
    <div className="flex justify-between items-center p-8 bg-lime-100">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Want to create a Prescription ?!</h1>
        <p className="w-3/4 text-sm">
          Do you have a prescription you want to get, you can always send us
          your prescription so that we deliver your order to you in a swift.!
        </p>
        <DialogDemo />
      </div>
      <Image src={drugImage} alt="prescription image" className="w-1/3" />
    </div>
  );
}

export default MakePrescription;
