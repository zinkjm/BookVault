import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext
import BookForm from '../components/BookForm';

const BookFormScreen = ({ navigation }) => {
  const { addBook } = useContext(BookContext); // Access addBook function from context

  const handleAddBook = (title, author, genre) => {
    addBook({ title, author, genre });
    navigation.goBack(); // Go back to the BookList screen after adding a book
  };

  return (
    <View>
      <Text>Add Book Form</Text>
      <BookForm onSubmit={handleAddBook} />
    </View>
  );
};

export default BookFormScreen;
