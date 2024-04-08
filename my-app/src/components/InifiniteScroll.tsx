"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

interface dataProducts {
  data: Product[];
}

export const InfiniteScrollComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [max, setMax] = useState(1);

  async function fetchData() {
    const response = await fetch(
      `http://localhost:3000/api/products/limit/${max * 5}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("error fetch data");
    }

    const dataJson = (await response.json()) as dataProducts;

    setProducts(dataJson.data);
    setMax(max + 1);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {products.map((item, index) => (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchData}
          hasMore={true}
          loader=""
          endMessage="">
          <Card
            key={index}
            product={item}
          />
        </InfiniteScroll>
      ))}
    </>
  );
};
