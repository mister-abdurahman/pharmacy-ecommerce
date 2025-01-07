"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="bg-gray-200 text-brand_green_700 font-semibold hover:text-white"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
