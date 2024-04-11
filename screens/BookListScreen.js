import React, { useContext } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import BookContext from '../contexts/BookContext'; // Import the BookContext

const BookListScreen = () => {
  const { books } = useContext(BookContext); // Access books array from context

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
