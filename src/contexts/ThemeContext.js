import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const loadTheme = JSON.parse(localStorage.getItem('theme'));
  const userTheme = loadTheme === null ? { isLightTheme: true } : loadTheme; // for first time visitors with no local data

  const [theme, setTheme] = useState({
    isLightTheme: userTheme.isLightTheme,
    light: { text: '#555', ui: '#ddd', bg: '#eee' },
    dark: { text: '#ddd', ui: '#333', bg: '#555' },
    showToggleText: false
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme]);

  return (  
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeContextProvider;