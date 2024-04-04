import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Menu = () => {
  const navigation = useNavigation(); // Access navigation object

  return (
    <View style={styles.container}>
      <Button
        title="Book List"
        onPress={() => navigation.navigate('BookList')}
      />
      <Button
        title="Add Book"
        onPress={() => navigation.navigate('BookForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
  },
});

export default Menu;
