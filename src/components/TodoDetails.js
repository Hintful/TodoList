import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
  const { todoDispatch } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;

  return (  
    <li style={{ background: style.bg }} onClick={() => todoDispatch({type:'REMOVE_TODO', id: todo.id})}>
      <div style={{ color: style.text }} className="name">{todo.name}</div>
      <div style={{ color: style.text }} className="note">{todo.note}</div>
    </li>
  );
}
 
export default TodoDetails;