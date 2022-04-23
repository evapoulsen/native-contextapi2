import React, { Component } from "react";
import { View , Text, StyleSheet, TouchableOpacity } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

class TodoList extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context;
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    return (
                        <View style={[styles.todoContainer, theme]}>
                            <Text style={[styles.item, theme]}>Define scope for the project</Text>
                            <Text style={[styles.item, theme]}>Gather data and content</Text>
                            <Text style={[styles.item, theme]}>Prepare design templates</Text>
                            <Text style={[styles.item, theme]}>Go fo a walk and get some fresh air</Text>
                            <Text style={[styles.item, theme]}>Perform design tests</Text>
                            <Text style={[styles.item, theme]}>Add functionality</Text>
                            <TouchableOpacity 
                                style={styles.buttonContainer}
                                onPress={changeTheme}
                                >
                                <Text style={styles.buttonText}>Change Theme</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#848484',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item: {
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

