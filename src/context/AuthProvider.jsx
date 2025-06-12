import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'


const AuthProvider = ({ children }) => {
    // Инициализируем состояние из localStorage
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('userInfo')
            return storedUser ? JSON.parse(storedUser) : null
        } catch (error) {
            console.error('Ошибка при загрузке данных из localStorage:', error)
            return null
        }
    })

    const updateUserInfo = (userData) => {
        setUser(userData)
        if (userData) {
            localStorage.setItem('userInfo', JSON.stringify(userData))
        } else {
            localStorage.removeItem('userInfo')
        }
    }

    return (
        <AuthContext.Provider value={{ user, updateUserInfo }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider