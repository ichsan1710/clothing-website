import Image from "next/image";
import carouselProduct from "../../public/carouselProduct.png";

export default function CarouselProduct() {
  return (
    <>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <Image
            src={carouselProduct}
            className="w-full"
            alt="carousel2"
          />
        </div>
      </div>
    </>
  );
}
