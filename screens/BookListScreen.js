import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext

const BookListScreen = () => {
  const { books } = useContext(BookContext); // Access books array from context

  return (
    <View>
      <Text>Book List</Text>
      {books.map((book, index) => (
        <View key={index}>
          <Text>Title: {book.title}</Text>
          <Text>Author: {book.author}</Text>
          <Text>Genre: {book.genre}</Text>
        </View>
      ))}
    </View>
  );
};

export default BookListScreen;
