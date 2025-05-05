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
import PopBrowsePage from './Pages/PopBrowsePage'
import { getToken } from './services/auth'
import  AuthProvider  from './context/AuthProvider' // Добавлено
import { CardsProvider } from './context/CardsProvider' // Добавлено

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(!!getToken())
    return (
      <AuthProvider> {/* Обёртка для всего приложения */}
        <CardsProvider> {/* Обёртка для защищённых маршрутов */}
          <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
              <Route path="/" element={<MainPage />}>
                <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
                <Route path="card/:id" element={<CardPage />} />
                <Route path="newcard" element={<NewCardPage />} />
                <Route path="edit" element={<PopBrowsePage/>} />
              </Route>
            </Route>

            <Route path="/signin" element={<SignInPage setIsAuth={setIsAuth} />} />
            <Route path="/signup" element={<SignUpPage setIsAuth={setIsAuth} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CardsProvider>
      </AuthProvider>
    );
  }
export default AppRoutes