import { useState} from 'react'
import MainPage from './Pages/MainPage'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import NotFoundPage from './Pages/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import ExitPage from './Pages/ExitPage'
import CardPage from './Pages/CardPage'
import { Route, Routes } from 'react-router-dom'
import NewCardPage from './Pages/newCardPage'
import { getToken } from './services/auth'




function AppRoutes() {
    const [isAuth, setIsAuth] = useState(!!getToken())

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage />}>
                    <Route
                        path="/exit"
                        element={<ExitPage setIsAuth={setIsAuth} />}
                    />
                    <Route path="/card/:id" element={<CardPage />} />
                    <Route path="/newcard" element={<NewCardPage />} />
                </Route>
            </Route>
            <Route
                path="/signIn"
                element={<SignInPage setIsAuth={setIsAuth} />}
            />
            <Route
                path="/signUp"
                element={<SignUpPage setIsAuth={setIsAuth} />}
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes