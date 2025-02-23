import SingleProductInfo from "@/components/singleProduct/SingleProductInfo";

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SingleProductInfo productId={(await params).slug} />;
}
