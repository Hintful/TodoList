import { useEffect } from "react";
import Container from "./components/Container";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import ReactGA from 'react-ga';

function usePageViews() {
  useEffect(() => {
    if(!window.GA_INIT) {
      ReactGA.initialize("UA-186165133-1");
      window.GA_INIT = true;
    }
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
}

function App() {
  usePageViews();

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
