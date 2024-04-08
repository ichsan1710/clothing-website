"use client";
import CarouselProduct from "@/components/CarouselProduct";
import { InfiniteScrollComponent } from "@/components/InifiniteScroll";

export default function Products() {
  return (
    <>
      <CarouselProduct />
      <div className="grid justify-center gap-4 dark:bg-white grid-cols-3 mx-40">
        <InfiniteScrollComponent />
      </div>
      <div className="flex flex-col justify-center items-center mt-9">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36">
          SEE MORE
        </button>
      </div>
    </>
  );
}
