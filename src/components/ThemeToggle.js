import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;

  const toggleTheme = () => {
    setTheme({...theme, isLightTheme: !theme.isLightTheme})
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