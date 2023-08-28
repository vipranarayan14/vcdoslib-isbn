import { BookDetails } from "./page";

export const BookInfo = ({ bookDetails }: { bookDetails: BookDetails }) => {
  return (
    <div>
      <h2>Info</h2>
      <div>Title: {bookDetails["Title"]}</div>
      <div>Author: {bookDetails["Author"]}</div>
      <div>Publication: {bookDetails["Publication"]}</div>
    </div>
  );
};
