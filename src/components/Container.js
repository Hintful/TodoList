import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Credit from './Credit';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import ThemeToggleText from './ThemeToggleText';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Container = () => {
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;

  return (  
    <div className="main" style={{ background: style.ui, height: "100vh", width: "100vw"}}>
      <div className="todo-container" style={{ width: "50%", margin: "auto" }}>
        <Navbar />
        <hr style= {{ background: style.text }} />
        <TodoList />
        <hr style= {{ background: style.text }} />
        <TodoForm />
        <ThemeToggle/>
        <ThemeToggleText />
        <Credit />
      </div>
    </div>
  );
}
 
export default Container;