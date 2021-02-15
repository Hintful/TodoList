import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Credit = () => {
  const { theme } = useContext(ThemeContext);

  const style = theme.isLightTheme ? theme.light : theme.dark;
  return (  
    <div style={{ textAlign: "center", fontSize: "0.75em", paddingTop: "20px", color: style.text }} className="credit">
      Coded and designed by <u>Kurt Choi</u>
    </div>
  );
}
 
export default Credit;