import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    productid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productid}`,
  };
};

export default function ProductDetails({ params }: Readonly<Props>) {
  if (params.productid === '10') {
    notFound();
  }

  // console.log(params.productid)

  return (
    <div>
      <h1>Welcome to product details page {params.productid}</h1>
    </div>
  );
}
