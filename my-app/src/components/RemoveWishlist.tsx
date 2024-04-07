"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface RemoveFromWishlistButtonProps {
  wishlistId: string;
}

export const RemoveFromWishlistButton: React.FC<
  RemoveFromWishlistButtonProps
> = ({ wishlistId }) => {
  const router = useRouter();
  const removeFromWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/wishlists`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: wishlistId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist");
      }

      console.log(response, "<<<<<<<");
      if (response.ok) {
        Swal.fire({
          text: "Success deleted wishlist",
          icon: "success",
        });
      }
      router.push("/products");
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <button
      onClick={removeFromWishlist}
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Remove From Wishlists
    </button>
  );
};
