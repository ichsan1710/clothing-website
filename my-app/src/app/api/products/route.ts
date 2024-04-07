import Product from "@/db/models/Product";

export async function GET(request: Request) {
  const products = await Product.getProducts();
  return Response.json(
    {
      data: products,
    },
    { status: 200 },
  );
}
