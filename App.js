import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/Todolist";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import AuthContextProvider from "./src/contexts/AuthContext";
import TodoListContextProvider from "./src/contexts/TodoListContext";
const App = () => {
  return (
    <View>
      <AuthContextProvider>
        <ThemeContextProvider>
          <TodoListContextProvider>
          <Navbar />
            <TodoList />
          </TodoListContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
}

export default App;

