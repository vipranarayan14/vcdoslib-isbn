import { FC } from "react";
import { saveIsbn } from "./data";

export const Form: FC = () => {
  return (
    <>
      <form action={saveIsbn}>
        <input type="text" name="isbn" />
        <input type="text" name="bookName" />
        <button type="submit">Save</button>
      </form>
    </>
  );
};
