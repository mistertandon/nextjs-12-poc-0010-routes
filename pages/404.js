import Link from "next/link";
const PageNotFound = () => {
  return (
    <>
      <h3>Custom 404 Page not found </h3>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
