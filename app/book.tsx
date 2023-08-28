"use client";

import styles from "./page.module.css";
import { FC, FormEvent, useState } from "react";
import { BookInfo } from "./bookInfo";

export type Book = Record<string, string>;

type Props = {
  books: Book[];
};

export const Book: FC<Props> = ({ books }) => {
  const [accNum, setAccNum] = useState("");
  const [bookDetails, setBookDetails] = useState<Book>();

  const handleGetClicked = (e: FormEvent) => {
    e.preventDefault();

    if (!accNum.length) {
      setBookDetails(undefined);
      return;
    }

    const bookDetails = books?.find((book) => book["Acc No"] === accNum);

    if (!bookDetails) {
      setBookDetails(undefined);
      return;
    }

    setBookDetails(bookDetails);
  };

  return (
    <>
      <form onSubmit={handleGetClicked}>
        <input
          type="search"
          name="accNum"
          value={accNum}
          onChange={(e) => setAccNum(e.target.value)}
        />
        <button type="submit">Get</button>
      </form>

      {bookDetails && <BookInfo bookDetails={bookDetails}></BookInfo>}
    </>
  );
};
