import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BookProvider } from './contexts/BookContext';
import BookFormScreen from './screens/BookFormScreen';
import BookListScreen from './screens/BookListScreen';
import Menu from './components/Menu';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="BookList" drawerContent={(props) => <Menu {...props} />}>
          <Drawer.Screen name="BookList" component={BookListScreen} options={{ headerTitle: 'Book List' }} />
          <Drawer.Screen name="BookForm" component={BookFormScreen} options={{ headerTitle: 'Add Book' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;

// TODO add a loaned date
// TODO add a loaned out screen
// TODO if due date is passed, show a warning!
// TODO add a delete book button
// TODO add a search bar?
// TODO add a shelf entry
// TODO add a shelf screen?