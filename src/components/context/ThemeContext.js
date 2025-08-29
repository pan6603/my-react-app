// ThemeContext.js
import React, { 
  createContext,
  useContext,
  useState
} from "react";

const ThemeContext = createContext();

export const ThemeProviderContext = ({children}) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context
}