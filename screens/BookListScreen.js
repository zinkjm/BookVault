import React, { useContext, useState } from 'react';
import { View, Text, Button, TouchableOpacity, SectionList, StyleSheet, Platform } from 'react-native'; // Import Platform from 'react-native'
import BookContext from '../contexts/BookContext'; // Import the BookContext
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const BookListScreen = () => {
  const { books, updateBook } = useContext(BookContext); // Access books array from context
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false); // Show DatePicker initially set to false

  // Function to group books by shelf and sort by shelf name
  const groupBooksByShelf = () => {
    const groupedBooks = books.reduce((acc, book) => {
      const shelf = book.shelf || 'Unknown';
      if (!acc[shelf]) {
        acc[shelf] = [];
      }
      acc[shelf].push(book);
      return acc;
    }, {});

    const sortedSections = Object.keys(groupedBooks)
      .sort() // Sort shelf names alphabetically
      .map((shelf) => ({
        title: shelf,
        data: groupedBooks[shelf],
      }));

    return sortedSections;
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Show DatePicker only for iOS
    if (selectedDate && selectedBook) {
      updateBook(selectedBook.id, { loan: selectedDate }); // Update the loan property of the selected book with the selected date
    }
  };

  const handleLendOut = (book) => {
    setSelectedBook(book);
    setShowDatePicker(true); // Show the date picker when lending out a book
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupBooksByShelf()}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <Text style={styles.loan}>Due date: {item.loan ? item.loan.toLocaleDateString('en-US') : 'No due date'}</Text>
            <TouchableOpacity onPress={() => handleLendOut(item)} style={styles.button}>
              <Text style={styles.buttonText}>Lend Out</Text>
            </TouchableOpacity>
            {showDatePicker && selectedBook === item && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
              />
            )}
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
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
  button: {
    backgroundColor: '#ADD8E6', // Light blue background
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-end', // Align to the right
  },
  buttonText: {
    color: 'black', // Black text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});

export default BookListScreen;
