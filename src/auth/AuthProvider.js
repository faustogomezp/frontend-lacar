import {createContext, useState} from 'react';
import variableService from '../services/online/getDataVariable.js'


export const AuthContext = createContext()

export default function AuthProvider ({children}) {

    //const [user, setUser] = useState(null)

    var user = null

    const setUser = (newUser) => {
        user = newUser
    }

    const getUser = () => user

    const login = (userCredentials) => {
        setUser(userCredentials)
        variableService.setToken(user.token)
    }

    const validateLogin =  () => {
        const loggedUserJSON = window.localStorage.getItem('loggedLacarUser');
        if (loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            login(loggedUser)
        }
    }

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('loggedLacarUser')
        variableService.setToken(null)
    };

    const isLogged = () => {
        return !!user
    }

    const contextValue = {
        getUser,
        isLogged,
        login,
        logout,
        validateLogin
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}