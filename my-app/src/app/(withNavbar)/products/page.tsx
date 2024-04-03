import Card from "@/components/Card";
import CarouselProduct from "@/components/CarouselProduct";

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
    </>
  );
}
