import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;
  return (  
    <div className="navbar" style={{ background: style.ui, color: style.text }}>
      <h1>To-do List</h1>
      <p>{todos.length} tasks remaining</p>
    </div>
  );
}
 
export default Navbar;