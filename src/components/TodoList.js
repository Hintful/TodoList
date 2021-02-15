import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;

  return todos.length ? (  
    // tasks exist
    <div style={{ background: style.ui }} className="todo-list">
      <ul>
        {todos.map(todo => {
          return (
            <TodoDetails todo={todo} key={todo.id} />
          )
        })}
      </ul>
    </div>
  ) : (
    // no tasks
    <div style={{ background: style.ui, color: style.text }} className="empty">No more tasks for today!</div>
  );
}
 
export default TodoList;