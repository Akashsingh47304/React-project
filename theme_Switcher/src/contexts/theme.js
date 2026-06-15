import {useContext, createContext} from 'react'

export const ThemeContext = createContext({
    themeMode: 'light',
      darkTheme: () => {},
    lightTheme: () => {},
})
export const ThemeProvider = ThemeContext.Provider

// this  is a hook that will be used to consume the theme context in our components
export default function useTheme(){
    return useContext(ThemeContext)
}