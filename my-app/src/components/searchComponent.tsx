"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export function searchComponent() {
  const [search, setSearch] = useState<string>("");
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  let query = search.replaceAll(" ", "%20");

  async function getSearchData(query: string) {
    let response = await fetch(
      `http://localhost:3000/api/products/search?search=` + query,
      {
        method: "GET",
        cache: "no-store",
      },
    );
    setSearchProduct((await response.json()).data);
  }

  useEffect(() => {
    if (search) {
      getSearchData(search);
    } else {
      setSearchProduct(products);
    }
  }, [search, products]);

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="ml-auto px-4 border border-gray-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
