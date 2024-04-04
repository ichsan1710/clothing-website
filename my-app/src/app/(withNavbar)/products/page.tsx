import Card from "@/components/Card";
import CarouselProduct from "@/components/CarouselProduct";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CarouselProduct />
      <div className="grid justify-center gap-4 dark:bg-white grid-cols-3 mx-40">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
