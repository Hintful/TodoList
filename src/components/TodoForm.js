import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  // contexts
  const { todoDispatch } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  // states
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const style = theme.isLightTheme ? theme.light : theme.dark;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page from refreshing upon submit
    todoDispatch({type: 'ADD_TODO', todo: {name, note}})
    // addTodo(name, note);
    setName('');
    setNote('');
  }
  return (  
    <form style={{ background: style.ui, color: style.text }} onSubmit={handleSubmit}>
      <input style={{ background: style.bg, color: style.text }} type="text" placeholder="What's your task?" value={name} 
      onChange={(e) => setName(e.target.value)} required />
      <input style={{ background: style.bg, color: style.text }} type="text" placeholder="Set note for the task" value={note} 
      onChange={(e) => setNote(e.target.value)} />
      <input style={{ background: style.text, color: style.ui }}type="submit" value="Add Task" />
    </form>
  );
}
 
export default TodoForm;