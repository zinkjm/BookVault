import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shelf, setShelf] = useState('');
  const [loan, setLoan] = useState(new Date().toISOString()); // Initialize loan state with current date


  const handleSubmit = () => {
    onSubmit(title, author, shelf, loan);
    setTitle('');
    setAuthor('');
    setShelf('');
    setLoan('');
  };

  return (
    <View>
      <TextInput
        style={styles.textBoxStyle}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.textBoxStyle}
        value={author}
        onChangeText={setAuthor}
        placeholder="Author"
      />
      <TextInput
        style={styles.textBoxStyle}
        value={shelf}
        onChangeText={setShelf}
        placeholder="Shelf"
      />
        <DatePicker
        style={{ width: 200 }}
        date={loan}
        mode="date"
        placeholder="Select Loan Date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2025-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: Platform.OS === 'ios' ? 36 : 0,
          },
          // You can add more custom styles as needed
        }}
        onDateChange={(date) => setLoan(date)}
      />
      <Button title="Add Book" className={styles.buttonStyle} onPress={handleSubmit} />
    </View>
  );
};

export default BookForm;
