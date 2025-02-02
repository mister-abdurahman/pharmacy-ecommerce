import { ICategory } from "@/_lib/types";
import Link from "next/link";
import React from "react";

function CategoryList({ list }: { list: ICategory[] }) {
  return (
    <ul className="hidden sm:flex justify-center gap-5 text-sm px-4">
      {list.map((el, i) => (
        <Link href={`/products?search=${el.name}`} key={i}>
          <li className="bg-gray-100 rounded-full px-2">{el.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default CategoryList;
