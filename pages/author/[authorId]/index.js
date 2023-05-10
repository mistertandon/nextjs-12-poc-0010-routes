import { useRouter } from "next/router";

const AuthorDetail = () => {
  const {
    query: { authorId },
  } = useRouter();
  return <h3>Particular Author with id: {authorId}</h3>;
};

export default AuthorDetail;
