import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

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
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  },
});

export default Menu;
