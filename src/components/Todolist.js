import React, { useContext, useState } from "react";
import { View , Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const { isDarkTheme, darkTheme, lightTheme, changeTheme }  = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    
    const { todos, addTodo, removeTodo } = useContext(TodoListContext);

    const handleChange = (text) => {
        setTodo(text);
    }

    const handleAddTodoPress = () => {
        addTodo(todo);
        setTodo('');
    }

    const handleRemoveTodo = (id) => {
        removeTodo(id);
    }

    return (
        <View style={[styles.todoContainer, theme]}>

            { todos.length ? (
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={todos}
                        keyExtractor={ (todo) => todo.id}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => handleRemoveTodo(item.id)}
                                >
                                    <Text style={[styles.listitem, theme]}>{item.text}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        />
                ) : (
                    <Text style={[styles.item, theme]}>You don't have any todos</Text>
                ) }
                <TextInput
                    value={todo} 
                    style={styles.input}
                    onChangeText={(text) => handleChange(text)} 

                />
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={handleAddTodoPress}
                >
                    <Text style={styles.buttonText}>Add New Todo</Text>
                </TouchableOpacity>
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
        flex: 1,
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
        marginTop: 15,
        marginBottom: 30
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        padding: 5,
    }
});

export default TodoList;

