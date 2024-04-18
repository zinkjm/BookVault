import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BookProvider } from './contexts/BookContext';
import BookFormScreen from './screens/BookFormScreen';
import BookListScreen from './screens/BookListScreen';
import DueBooksScreen from './screens/DueBooksScreen';
import Menu from './components/Menu';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="BookList" drawerContent={(props) => <Menu {...props} />}>
          <Drawer.Screen name="BookList" component={BookListScreen} options={{ headerTitle: 'Book List' }} />
          <Drawer.Screen name="BookForm" component={BookFormScreen} options={{ headerTitle: 'Add Book' }} />
          <Drawer.Screen name="DueBooks" component={DueBooksScreen} options={{headerTitle: 'Lent Out Books' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;
