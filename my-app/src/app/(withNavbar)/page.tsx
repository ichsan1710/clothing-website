import CarouselHome from "@/components/CarouselHome";
import DetailInfo from "@/components/DetailInfo";
import Link from "next/link";

interface dataProducts {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
  createdAt: string;
  updatedAt: string;
}

const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/api/products`, {
    method: "get",
  });
  return await data.json();
};
export default async function Home() {
  let result = await fetchData();

  const products = result.data;

  return (
    <>
      <CarouselHome />
      <DetailInfo />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
          Collections
        </h1>
        <div className="carousel carousel-center p-4 space-x-4 bg-black rounded-box mt-9">
          {products.map((item: dataProducts, index: string) => (
            <div
              className="carousel-item"
              key={index}>
              <img
                src={item.thumbnail}
                className="rounded-box w-auto h-96"
              />
            </div>
          ))}
        </div>
        <Link
          href="/products"
          className="mt-9">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            LEARN MORE
          </button>
        </Link>
      </div>
    </>
  );
}
