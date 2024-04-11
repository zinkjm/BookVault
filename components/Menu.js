import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BookList')}
      >
        <Text style={styles.buttonText}>Book List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BookForm')}
      >
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DueBooks')}
      >
        <Text style={styles.buttonText}>Lent out Books</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: 'none',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    backgroundColor: '#ADD8E6', // Light blue background
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%', // Take the whole width
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    color: '#000', // Black text color
    fontWeight: 'bold',
  },
});

export default Menu;
