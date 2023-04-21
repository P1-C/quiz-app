import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/AuthContext'

const WelcomePage = () => {
    const authCtx = useContext(AuthContext)
    console.log(authCtx)
    const history = useHistory()
    const LoginNavigationHandler = () => { 
        history.replace('/auth')
     }
  return (
    <div style={{marginTop: '100px', color: 'white', textAlign:'center'}}>
        <h1>Welcome to quiz app</h1>
        <h2 onClick={LoginNavigationHandler} style={{cursor:'pointer'}}>{authCtx.isLoggedIn ? 'Hope you are enjoying this app' : `Please "Login/Signup" to continue`}</h2>
    </div>
  )
}

export default WelcomePage
