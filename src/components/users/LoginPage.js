import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import classes from './LoginPage.module.css'

const LoginPage = (props) => {

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()
  const handleIsLogin = () => {
    setIsLogin(!isLogin)
    emailInputRef.current.value = ''
    passwordInputRef.current.value = ''
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
      setError({
        type: 'error',
        title: 'Invalid input',
        message: 'Please enter valid details',
      })
      return
    }
    //validating in email character
    //must contain @ symbol
    if (enteredEmail.length > 0 && !enteredEmail.includes('@')) {
      setError({
        type: 'error',
        title: 'Invalid email',
        message: 'Email should contain "@" symbol',
      })
      return
    }
    //validating password length
    //minimum 7 characters required
    if (enteredPassword.length < 7) {
      setError({
        title: 'Invalid password',
        message: 'Password should be atleast 7 characters',
      })
      return
    }

    //login logic
    setIsLoading(true)
    let url
    if (isLogin) {
      // alert('login started')
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJljkC3Guaqt0x-MfFiMLS63-4VkxVd5I'
    } else {
      // alert('register started')
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJljkC3Guaqt0x-MfFiMLS63-4VkxVd5I'
    }
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          // res ok : show success, redirect to some other page
          handleIsLogin()
          if(isLogin){
            return res.json()
          } else {
            setError({
              title: 'Registered successfully',
              message: 'Please login to continue',
            })
          }
        } else {
          // res not ok : show error msg
          return res.json().then(data => {
            let errorMessage = 'Authentication Failed'
            throw new Error(errorMessage)
          })
        }
      })
      .then((data) => {
        if(isLogin){
          authCtx.login(data)
          history.replace('/profile')
        }
      }).catch(err => {
        alert(err.message)
        setError({
            title: 'Error !!',
            message: err.message,
          })
      })
  }
  const errorHandler = () => {
    setError(null)
  }
  return (
    <React.Fragment>
      {error && <ErrorModal type={error.type} title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.login}>
        <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
        <form onSubmit={handleSubmit}>
          <label><h4>Email</h4></label>
          <input type='text' placeholder='Enter email' id='email' ref={emailInputRef} />
          <label><h4>Password</h4></label>
          <input type='password' placeholder='Enter password' id='password' ref={passwordInputRef} />
          <button type='submit'>{
            isLoading ? 'Loading...' : isLogin ? 'Login' : 'Create account'
          }</button>
          <p className={classes.toggle} type='button' onClick={handleIsLogin}>{isLogin ? 'Create new account' : 'Login with existing account'}</p>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default LoginPage