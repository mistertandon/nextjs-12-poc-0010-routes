import Link from "next/link";
export default function Home() {
  return (
    <>
      <h3>Home Page</h3>
      <ul>
        <li>
          <Link href="profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/product/118">
            <a>Product Detail</a>
          </Link>
        </li>
        <li>
          <Link href="/doc/dual/hard/1">
            <a>Doc with feature, concept and example</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
