import React, { useState } from 'react';
import { View, Platform, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shelf, setShelf] = useState('');
  const [loan, setLoan] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false); // Show DatePicker initially set to false

  const handleSubmit = () => {
    onSubmit(title, author, loan, shelf);
    setTitle('');
    setAuthor('');
    setShelf('');
    setLoan('');
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Show DatePicker only for iOS
    if (selectedDate) {
      setLoan(selectedDate);
    }
  };

  return (
    <View>
      <View style={styles.rowContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          style={styles.input}
        />
        <TextInput
          value={author}
          onChangeText={setAuthor}
          placeholder="Author"
          style={styles.input}
        />
      </View>
      <View style={styles.rowContainer}>
        <TextInput
          value={shelf}
          onChangeText={setShelf}
          placeholder="Shelf"
          style={styles.input}
        />
        <Text>Expected return: </Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.buttonText}>{loan ? loan.toLocaleDateString('en-US') : 'Add due date'}</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  datePickerButton: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default BookForm;
