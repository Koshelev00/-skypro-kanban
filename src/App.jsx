// App.jsx
import "./App.css";
import AppRoutes from "./AppRoutes";
import { SGlobal } from "./Global.styled";
import AuthProvider from './context/AuthProvider'
import { CardsProvider } from './context/CardsProvider' // <-- ADD IMPORT
import { useState } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import { lightTheme, darkTheme } from './themes'

function App() {
    const [theme, setTheme] = useState(lightTheme)
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <AuthProvider>
                <CardsProvider> {/* ADD THIS WRAPPER */}
                    <SGlobal />
                    <AppRoutes />
                </CardsProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App