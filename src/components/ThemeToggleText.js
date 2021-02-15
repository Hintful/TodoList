import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggleText = () => {
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;
  const show = theme.showToggleText ? "block" : "none";

  return (  
    <div style={{ display: show, color: style.text }} className="theme-toggle-text">
      Change Theme
    </div>
  );
}
 
export default ThemeToggleText;