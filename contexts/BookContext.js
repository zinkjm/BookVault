import React, { createContext, useState } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // Function to update book details
  const updateBook = (id, newData) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, ...newData } : book))
    );
  };
  
  // Function to set the loan property to null for a book
  const returnBook = (id) => {
    updateBook(id, { loan: null });
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
