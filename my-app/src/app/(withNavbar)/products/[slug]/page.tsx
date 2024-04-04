import Link from "next/link";

export default function ProductDetail() {
  return (
    <>
      <div className="flex mx-auto h-screen w-full">
        <div className="flex mx-12 mt-7 flex-1 justify-center">
          <img
            src="https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-161-1_copy.jpg?v=1710428898&width=1500"
            alt="Product Thumbnail"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 w-full mx-12 mt-24">
          <div></div>
          <h1 className="text-3xl font-bold my-4">
            Patta x Converse Rain or Shine Pant (Utility Green Heather)
          </h1>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="mt-2">
            The Patta x Converse Rain or Shine Pants are constructed in 100%
            Cotton Legacy French Terry fabric. The sweat pants features an
            elasticated waistband with drawstrings, two side pockets and a back
            pocket. A standout detail on the Utility Green Heater sweats are the
            contrast stitching in white. Other details are a Patta x Converse
            logo on the left side of the pants.
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Price</h2>
            <p className="mt-2">$99.99</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span>Pants</span>
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
