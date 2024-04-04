export default function Card() {
  return (
    <>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src="https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-161-1_copy.jpg?v=1710428898&width=1500"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Patta x Converse Rain or Shine Pant (Utility Green Heather)
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $95.00
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            The Patta x Converse Rain or Shine Pants are constructed in 100%
            Cotton Legacy French Terry fabric. The sweat pants features an
            elasticated waistband with drawstrings, two side pockets and a back
            pocket. A standout detail on the Utility Green Heater sweats are the
            contrast stitching in white. Other details are a Patta x Converse
            logo on the left side of the pants.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Add to Wishlists
          </button>
        </div>
      </div>
    </>
  );
}
