export default function Headline() {
  return (
    <>
      <div
        data-slider-wrapper=""
        data-slider-direction="horizontal"
        data-speed={5000}
        className="sticky z-10 inset-x-0 top-0 overflow-hidden bg-black text-white lg:flex no-scrollbar">
        <div
          className="transition-all duration-500 lg:duration-1000 m-0 grid auto-cols-[100%] auto-rows-max w-full grid-flow-col"
          data-slider=""
          style={{ transform: "translateX(0px)" }}>
          <div
            data-item=""
            className="flex items-center justify-center h-10 p-4 text-[calc(((16)/(var(--font-size-base)))*1em)] scroll-item w-full"
            data-iso="DEFAULT">
            <span
              className="hover:underline "
              style={{
                fontWeight: "var(--font-weight-header)",
                color: "#ffffff",
              }}>
              FREE SHIPPING ON ASIA ORDERS ABOVE 250,-
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
