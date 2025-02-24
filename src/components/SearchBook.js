import { useEffect, useState } from "react";
import BooksList from "./BooksList";

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getBooks();
  }, [input]);

  const getBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyBkuqjGvkWxOa95upXCdE_gtIv_0kPe3aA`
    );
    const data = await res.json();
    console.log(data);
    if (data.items) {
      setBooks(data.items);
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search..."
          autoFocus
        />
      </div>
      <BooksList books={books} />
    </>
  );
};

export default SearchBook;
