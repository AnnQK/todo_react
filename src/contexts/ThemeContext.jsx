import React from 'react';

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const state = { isLightTheme: true, lightTheme, darkTheme };
  const toggleTheme = () => {};
  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
