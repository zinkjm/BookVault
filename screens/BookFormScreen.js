import React, { useContext } from 'react';
import { View } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext
import BookForm from '../components/BookForm';

const BookFormScreen = ({ navigation }) => {
  const { addBook } = useContext(BookContext); // Access addBook function from context

  const handleAddBook = (title, author, loan, shelf) => {
    addBook({ title, author, loan, shelf });
    navigation.goBack(); // Go back to the BookList screen after adding a book
  };

  return (
    <View>
      <BookForm onSubmit={handleAddBook} />
    </View>
  );
};

export default BookFormScreen;
