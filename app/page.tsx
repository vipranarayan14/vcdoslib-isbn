"use client";

import styles from "./page.module.css";
import { getData } from "./data";
import { useEffect, useState } from "react";
import { BookInfo } from "./bookInfo";

// let books: Record<string, string>[] = [];

export type BookDetails = Record<string, string>;

export default function Home() {
  const [books, setBooks] = useState<BookDetails[]>();
  const [accNum, setAccNum] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookDetails>();

  const handleGetClicked = () => {
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

  useEffect(() => {
    getData().then((data) => {
      setBooks(data);
      setIsReady(true);
    });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Hello Rama!</h1>
      <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="accNum"
            value={accNum}
            onChange={(e) => setAccNum(e.target.value)}
            disabled={!isReady}
          />
          <button onClick={handleGetClicked} disabled={!isReady} type="submit">
            Get
          </button>
        </form>

        {!!bookDetails && <BookInfo bookDetails={bookDetails}></BookInfo>}
      </div>
    </main>
  );
}
