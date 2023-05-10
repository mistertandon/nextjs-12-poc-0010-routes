import { useRouter } from "next/router";

const BookDetail = () => {
  const {
    query: { authorId, bookId },
  } = useRouter();

  return (
    <h3>
      Book with id: {bookId} written by Author with id: {authorId}
    </h3>
  );
};

export default BookDetail;
