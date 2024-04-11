import React, { useState } from 'react';
import { View, Platform, Button, Text, TextInput, StyleSheet } from 'react-native';
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
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        value={author}
        onChangeText={setAuthor}
        placeholder="Author"
      />
      <TextInput
        value={shelf}
        onChangeText={setShelf}
        placeholder="Shelf"
      />
      <Text>Expected return: </Text>
      <Button
          title={loan ? loan.toLocaleDateString('en-US') : 'No due date'}
          onPress={() => setShowDatePicker(true)}
          style={styles.datePickerButton} // Apply custom style to the button
        />
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        )}

      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  datePickerButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookForm;
