import { useContext } from 'react' // Добавлен импорт useContext
import MainPage from './Pages/MainPage'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import NotFoundPage from './Pages/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import ExitPage from './Pages/ExitPage'
import CardPage from './Pages/CardPage'
import { Route, Routes } from 'react-router-dom'
import NewCardPage from './Pages/newCardPage'
import { AuthContext } from './context/AuthContext' // Добавлен импорт AuthContext

function AppRoutes() {
    const { user } = useContext(AuthContext) // Используем контекст
    
    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={!!user} />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="/exit" element={<ExitPage />} />
                    <Route path="/card/:id" element={<CardPage />} />
                    <Route path="/newcard" element={<NewCardPage />} />
                </Route>
            </Route>
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes