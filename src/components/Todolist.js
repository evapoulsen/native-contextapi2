import React, { useContext } from "react";
import { View , Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme }  = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { todos } = useContext(TodoListContext);
    console.log(todos);
    return (
        
        <View style={[styles.todoContainer, theme]}>

            { todos.length ? (
                    <FlatList
                        data={todos}
                        keyExtractor={ (todo) => todo.id}
                        renderItem={({item}) => {
                            return (
                                <Text style={[styles.listitem, theme]}>{item.text}</Text>
                            )
                        }}
                        />
                ) : (
                    <Text style={[styles.item, theme]}>You don't have any todos</Text>
                ) }
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={changeTheme}
                >
                <Text style={styles.buttonText}>Change Theme</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#848484',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    listitem: {
        color: 'white',
        fontSize: 16,
        paddingVertical: 12,
    },
    buttonContainer: {
        backgroundColor: '#8258FA',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default TodoList;

