export default function Headline() {
  return (
    <>
      <div
        data-slider-wrapper=""
        data-slider-direction="horizontal"
        data-speed={5000}
        className="absolute inset-x-0 top-0 overflow-hidden text-black lg:flex no-scrollbar">
        <div
          className="transition-all duration-500 lg:duration-1000 m-0 grid auto-cols-[100%] auto-rows-max w-full grid-flow-col"
          data-slider=""
          style={{ transform: "translateX(0px)" }}>
          <div
            data-item=""
            className="flex items-center justify-center h-10 p-4 text-[calc(((16)/(var(--font-size-base)))*1em)] scroll-item w-full"
            data-iso="DEFAULT">
            <a
              href="/pages/product-page-shipping-policy"
              className="w-full mb-0 text-center uppercase">
              <span
                className="hover:underline "
                style={{
                  fontWeight: "var(--font-weight-header)",
                  color: "#ffffff",
                }}>
                FREE SHIPPING ON ASIA ORDERS ABOVE 250,-
              </span>
            </a>
          </div>
          <div
            data-item=""
            className="flex items-center justify-center h-10 p-4 text-[calc(((16)/(var(--font-size-base)))*1em)] scroll-item w-full"
            data-iso="DEFAULT">
            <a
              href="/pages/patta-app"
              className="w-full mb-0 text-center uppercase">
              <span
                className="hover:underline "
                style={{
                  fontWeight: "var(--font-weight-header)",
                  color: "#ffffff",
                }}>
                Download the pattas app for exclusive releases and special
                deals.
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
