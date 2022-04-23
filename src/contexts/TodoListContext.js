import React, { createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        {text: 'Define scope for the project', id: '1'},
        {text: 'Gather data and content', id: '2'},
        {text: 'Prepare design templates', id: '3'},
        {text: 'Go fo a walk and get some fresh air', id: '4'},
        {text: 'Perform design tests', id: '5'},
        {text: 'Add functionality', id: '6'}
    ]);

    return (
        <TodoListContext.Provider value={{ todos , dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;

