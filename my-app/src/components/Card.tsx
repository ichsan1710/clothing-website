import { Product } from "@/types";
import Link from "next/link";
import { AddToWishlistButton } from "./AddToWishlists";

interface CardProductProps {
  product: Product;
}

export default function Card({ product }: CardProductProps) {
  return (
    <>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Link href={`/products/${product.slug}`}>
            <img
              src={product.thumbnail}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {product.name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${product.price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {product.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <AddToWishlistButton productId={product._id} />
        </div>
      </div>
    </>
  );
}
