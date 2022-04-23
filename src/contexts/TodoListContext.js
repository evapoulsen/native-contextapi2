import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'Define scope for the project', id: '1'},
        {text: 'Gather data and content', id: '2'},
        {text: 'Prepare design templates', id: '3'},
        {text: 'Go fo a walk and get some fresh air', id: '4'},
        {text: 'Perform design tests', id: '5'},
        {text: 'Add functionality', id: '6'}
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, {text: todo, id: `${Math.random()}`}]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return (
                todo.id !== id
            );
        }));
    }


    return (
        <TodoListContext.Provider value={{ todos , addTodo, removeTodo }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;

