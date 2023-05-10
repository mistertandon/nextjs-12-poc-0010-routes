import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetail = () => {
  /**
   * Here we need to handle dynamic routes error
   */
  const { query: { productId } = { productId: undefined } } = useRouter();

  return (
    <>
      <div>Product Detail : {productId}</div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
