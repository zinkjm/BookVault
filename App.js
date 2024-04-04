import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './contexts/BookContext'; // Import the BookProvider
import BookFormScreen from './screens/BookFormScreen';
import BookListScreen from './screens/BookListScreen';
import Menu from './components/Menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookList">
          <Stack.Screen name="BookList" component={BookListScreen} options={{ headerTitle: 'Book List' }} />
          <Stack.Screen name="BookForm" component={BookFormScreen} options={{ headerTitle: 'Add Book' }} />
        </Stack.Navigator>
        <Menu />
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;

// TODO add a screen and component for setting a due date and "loaning a book out"
// TODO add a screen for loaned out books, sorted by the due date
// TODO add a way to delete books
// TODO add a way to make books "returned"