import Link from "next/link";
import { Product } from "@/types";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;

  const product = await fetchData(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.data.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function fetchData(slug: string) {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);

  const data = await response.json();

  return data;
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: { data: Product } = await fetchData(params.slug);

  return (
    <>
      <div className="flex mx-auto h-screen w-full">
        <div className="flex mx-12 mt-7 flex-1 justify-center">
          <div className="relative mx-12 mt-7 flex-1 justify-center">
            <div className="carousel">
              <div className="carousel-item w-full">
                <div
                  id="slide1"
                  className="carousel-item relative w-full">
                  <img
                    src={product?.data.images[0]}
                    alt="Product Thumbnail"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link
                      href="#slide1"
                      className="btn btn-circle">
                      ❮
                    </Link>
                    <Link
                      href="#slide2"
                      className="btn btn-circle">
                      ❯
                    </Link>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item relative w-full">
                  <img
                    src={product?.data.images[1]}
                    alt="Product Thumbnail"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link
                      href="#slide1"
                      className="btn btn-circle">
                      ❮
                    </Link>
                    <Link
                      href="#slide2"
                      className="btn btn-circle">
                      ❯
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full mx-12 mt-24">
          <h1 className="text-3xl font-bold my-4">{product?.data.name}</h1>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="mt-2">{product?.data.description}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Price</h2>
            <p className="mt-2">${product?.data.price}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.data.tags.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Size</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="border-black border-2 py-2 px-5 rounded hover:bg-gray-800 hover:text-white">
                S
              </button>
              <button className="border-black border-2 py-2 px-5 rounded hover:bg-gray-800 hover:text-white">
                M
              </button>
              <button className="border-black border-2 py-2 px-5 rounded hover:bg-gray-800 hover:text-white">
                L
              </button>
              <button className="border-black border-2 py-2 px-5 rounded hover:bg-gray-800 hover:text-white">
                XL
              </button>
              <button className="border-black border-2 py-2 px-5 rounded hover:bg-gray-800 hover:text-white">
                XXL
              </button>
            </div>
          </div>
          <Link href="/products">
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-12">
              RETURN TO COLLECTIONS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
