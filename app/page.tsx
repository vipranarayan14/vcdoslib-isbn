import styles from "./page.module.css";
import { getData } from "./data";
import { Book } from "./book";
import { Form } from "./form";

export type BookDetails = Record<string, string>;

export default async function Home() {
  const books = await getData();

  return (
    <main className={styles.main}>
      <h1>Hello Rama!</h1>
      <div>
        <Book books={books} />
        <Form />
      </div>
    </main>
  );
}
