import Product from "@/db/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { max: number } },
) {
  const products = await Product.getProductByPage(params.max);

  return Response.json(
    {
      data: products,
    },
    { status: 200 },
  );
}
