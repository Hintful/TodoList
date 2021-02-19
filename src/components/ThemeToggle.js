import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ReactGA from 'react-ga';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;

  const toggleTheme = () => {
    setTheme({...theme, isLightTheme: !theme.isLightTheme});
    ReactGA.event({
      category: 'TodoList',
      action: 'Clicked Toggle Theme button'
    });
  }

  const toggleThemeText = () => {
    setTheme({...theme, showToggleText: !theme.showToggleText})
  }

  return (
    <div style={{ background: style.bg, border: "1px solid " + style.text }} 
    onClick={toggleTheme} onMouseEnter={toggleThemeText} onMouseLeave={toggleThemeText} className="theme-toggle"></div>
  );
}
 
export default ThemeToggle;