import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetail = () => {
  /**
   * Here we need to handle dynamic routes error
   */
  const { query: { productId } = { productId: undefined }, push } = useRouter();

  const placeOrderHandler = () => {
    
    console.log("Order placed successfully");
    push("/product");
  };
  return (
    <>
      <div>Product Detail : {productId}</div>
      <div>
        <button onClick={() => placeOrderHandler()}>Place Order</button>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
