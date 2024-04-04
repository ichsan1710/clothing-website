import CarouselHome from "@/components/CarouselHome";
import DetailInfo from "@/components/DetailInfo";

export default function Home() {
  return (
    <>
      <CarouselHome />
      <DetailInfo />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
          Collections
        </h1>
        <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box mt-9">
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-161-1_copy.jpg?v=1710428898&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0222-085_model.jpg?v=1707739986&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-039copy.jpg?v=1710428928&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/POC-SS24-1000-294-0236-002_model3.jpg?v=1705917374&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/L3A8669copy.jpg?v=1706704868&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-138-1-Recovered_2copy.jpg?v=1710851260&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/POC-SS24-2010-325-0237-084_F.jpg?v=1705917149&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/PattaWhiskersJeansVintageBlue.jpg?v=1706801480&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.patta.nl/cdn/shop/files/POC-SS24-4310-334-0245-133_F.jpg?v=1705917595&width=1500"
              className="rounded-box w-auto h-96"
            />
          </div>
        </div>
        <a
          href="/products"
          className="mt-9">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            LEARN MORE
          </button>
        </a>
      </div>
    </>
  );
}
