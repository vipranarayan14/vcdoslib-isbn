"use server";

import Papa from "papaparse";
import { firestore } from "./firebase";

export const getData = async (): Promise<Record<string, any>[]> => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/" +
    "2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y78r7Y488E/pub?gid=0&single=true&output=csv";
  const response = await fetch(url);
  const csv = await response.text();

  const json = await Papa.parse(csv, {
    header: true,
  });

  return json["data"];
};

export const saveIsbn = async (data: FormData) => {
  const isbn = data.get("isbn");
  const bookName = data.get("bookName");

  await firestore.doc(`books/${isbn}`).set({
    isbn,
    bookName,
    copies: 20,
    additionalField: 'something'
  });
};
