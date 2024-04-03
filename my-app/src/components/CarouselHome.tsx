import Image from "next/image";
import carouselHome from "../../public/carouselHome.jpg";

export default function CarouselHome() {
  return (
    <>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <Image
            src={carouselHome}
            className="w-full"
            alt="carousel2"
          />
        </div>
      </div>
    </>
  );
}
