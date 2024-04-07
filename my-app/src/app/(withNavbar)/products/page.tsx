"use client";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import CarouselProduct from "@/components/CarouselProduct";
import Link from "next/link";

interface dataProducts {
  data: Product[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/api/products`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("error fetch data");
      }

      const dataJson = (await response.json()) as dataProducts;

      setProducts(dataJson.data);
    }
    fetchData();
  });

  return (
    <>
      <CarouselProduct />
      <div className="grid justify-center gap-4 dark:bg-white grid-cols-3 mx-40">
        {products.map((item, index) => (
          <Card
            key={index}
            product={item}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-9">
        <Link href="">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            SEE MORE
          </button>
        </Link>
      </div>
    </>
  );
}
