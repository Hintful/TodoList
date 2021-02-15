import Container from "./components/Container";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TodoContextProvider>
          <Container />
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
