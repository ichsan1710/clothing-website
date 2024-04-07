import Product from "@/db/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const product = await Product.getProductBySlug(params.slug);

  return Response.json(
    {
      data: product,
    },
    { status: 200 },
  );
}
