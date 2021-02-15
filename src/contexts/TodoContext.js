import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, todoDispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : []
  })
  // const addTodo = (name, note) => {
  //   setTodos([...todos, {name, note, id: uuidv4()}])
  // }
  // const removeTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]); // run whenever 'todos' change

  return (  
    <TodoContext.Provider value={{todos, todoDispatch}}>
      {props.children}
    </TodoContext.Provider>
  );
}
 
export default TodoContextProvider;