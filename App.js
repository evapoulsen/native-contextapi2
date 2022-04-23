import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/Todolist";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import AuthContextProvider from "./src/contexts/AuthContext";

const App = () => {
  return (
    <View>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
}

export default App;

