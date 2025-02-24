const BooksList = ({ books }) => {
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book-container">
          {book.volumeInfo.imageLinks && (
            <img
              key={book.id}
              className="book-img"
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt=""
            />
          )}
          <div className="overlay">
            {book.volumeInfo.title}
            <p>
              By: {book.volumeInfo.authors ? book.volumeInfo.authors : "Anonymous"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
