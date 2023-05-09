import { useRouter } from "next/router";
const ProductDetail = () => {
  /**
   * Here we need to handle dynamic routes error
   */
  const { query: { productId } = { productId: undefined } } = useRouter();

  return <div>Product Detail : {productId}</div>;
};

export default ProductDetail;
