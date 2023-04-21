import { useState } from 'react'
import AuthContext from './AuthContext'

const AuthContextProvider = (props) => {
    const [token, setToken ] = useState(localStorage.getItem('userToken'))
    const [userDetails, setUserDetails ] = useState(JSON.parse(localStorage.getItem('userDetails')))
    const userIsLoggedIn = !!token
    const loginHandler = (userData) => {
        const token = userData.idToken
        const email = userData.email
        const userName = email.substring(0, email.lastIndexOf("@"))
        const domainName = email.substring(email.lastIndexOf("@") +1)
        let userType = 'Trainee' 
        if(domainName === 'quiz.com'){
            userType = 'Trainer'
        }
        let userObj = {
            email: email,
            userName: userName,
            role: userType
        }
        setToken(token)
        setUserDetails(userObj)
        localStorage.setItem('userToken',token)
        localStorage.setItem('userDetails',JSON.stringify(userObj))
    }
    const logoutHandler = () => {
        setToken(null)
        setUserDetails(null)
        localStorage.removeItem('userToken')
        localStorage.removeItem('userDetails')
    }
    const contextValue = {
        token: token,
        user: userDetails,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider 