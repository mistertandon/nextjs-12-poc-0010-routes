import { useRouter } from "next/router";

const Book = () => {
    
  const {
    query: { authorId },
  } = useRouter();

  return <h3>Books written by Author with id: {authorId}</h3>;
};

export default Book;
