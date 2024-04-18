import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext

const DueBooksScreen = () => {
  const { books, updateBook } = useContext(BookContext); // Access books array and updateBook function from context

  // Filter books with a loan date
  const dueBooks = books.filter((book) => book.loan !== null);

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
      {dueBooks.map((book, index) => (
        <View key={book.title + index} style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Author: {book.author}</Text>
            <Text style={styles.loan}>Due date: {book.loan.toLocaleDateString('en-US')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleReturnBook(book.id)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Returned</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  infoContainer: {
    flex: 1,
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
  button: {
    backgroundColor: '#ADD8E6', // Light blue background
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center', // Center the button vertically
  },
  buttonText: {
    color: 'black', // Black text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DueBooksScreen;
