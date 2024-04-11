import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext

const DueBooksScreen = () => {
  const { books, updateBook } = useContext(BookContext); // Access books array and updateBook function from context

  // Filter books with a loan date
  const dueBooks = books.filter((book) => book.loan);

  // Sort books by loan date in ascending order
  dueBooks.sort((a, b) => new Date(a.loan) - new Date(b.loan));

  // Check for overdue books and display alert
  useEffect(() => {
    const currentDate = new Date();
    const overdueBooks = dueBooks.filter((book) => new Date(book.loan) <= currentDate);

    overdueBooks.forEach((book) => {
      Alert.alert('Overdue Book', `${book.title} is overdue!`);
    });
  }, [dueBooks]);

  // Function to handle book return
  const handleReturnBook = (bookId) => {
    updateBook(bookId, { loan: null }); // Set due date to null for the returned book
  };

  return (
    <View style={styles.container}>
      {dueBooks.map((book) => (
        <View key={book.id} style={styles.item}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>Author: {book.author}</Text>
          <Text style={styles.loan}>Due date: {book.loan.toLocaleDateString('en-US')}</Text>
          <Button title="Returned" onPress={() => handleReturnBook(book.id)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginHorizontal: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    marginBottom: 4,
  },
  loan: {
    fontSize: 14,
    color: '#666',
  },
});

export default DueBooksScreen;
