"use client";

import { RemoveFromWishlistButton } from "@/components/RemoveWishlist";
import { ObjectId } from "mongodb";
import React, { useEffect, useState } from "react";

interface ProductData {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface WishlistData {
  _id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  productDetails: ProductData;
}

interface ArrayOfWishlist {
  data: WishlistData[];
}
export default function Wishlists() {
  const [wishlists, setWishlists] = useState<WishlistData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api/wishlists`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to Fetch Wishlist Items");
        }

        const responseJson = await response.json();

        setWishlists(responseJson);
      } catch (error) {
        console.error("Error fetching wishlist item:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleRemoveItem = (id: string) => {
    setWishlists(wishlists.filter((item) => item._id !== id));
  };

  return (
    <>
      {loading ? (
        <p className="text-center mt-20">Loading...</p>
      ) : (
        <div className="grid justify-center gap-4 grid-cols-3 mx-40">
          {wishlists &&
            wishlists.map((item, index) => (
              <div
                className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                key={index}>
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img
                    src={item.productDetails.thumbnail}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {item.productDetails.name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      ${item.productDetails.price}
                    </p>
                  </div>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {item.productDetails.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <RemoveFromWishlistButton wishlistId={item._id} />
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
