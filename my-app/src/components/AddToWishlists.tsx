import React from "react";

interface AddToWishlistButtonProps {
  productId: Object;
}

export const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({
  productId,
}) => {
  const handleAddToWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/wishlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to wishlist");
      }

      const result = await response.json();

      if (result) {
        alert("success added wishlist");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Add to Wishlists
    </button>
  );
};
