import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = () => {
    onSubmit(title, author, genre);
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Author"
      />
      <TextInput
        style={styles.input}
        value={genre}
        onChangeText={setGenre}
        placeholder="Genre"
      />
      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default BookForm;
