import React, { useContext, useEffect, useState } from 'react'
import Dashboard from './components/users/Dashboard'
import LoginPage from './components/users/LoginPage'
// import Header from './components/layout/Header'
import ScoreProvider from './store/ScoreProvider'
import ScoreListModal from './components/score/ScoreListModal'
import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import AddQuizSection from './components/create-quiz/AddQuizSection'
import AuthContextProvider from './store/AuthProvider'
import WelcomePage from './components/users/WelcomePage'
// import AuthContext from './store/AuthContext'
import UserProfile from './components/profile/UserProfile'

const App = () => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isScoreModalShown, setIsScoreModalShown] = useState(false)
  // const authCtx = useContext(AuthContext)
  // const isLoggedIn = authCtx.isLoggedIn
  const showScoreHandler = () => {
    setIsScoreModalShown(true)
  }
  const closeScoreHandler = () => {
    setIsScoreModalShown(false)
  }
  
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <ScoreProvider>
      <Layout onShowScoreModal={showScoreHandler}>
        <Switch>
          <Route path='/' exact>
              <WelcomePage />
          </Route>
          <Route path='/auth'>
            <LoginPage />
          </Route>
          <Route exact path='/create_quiz' >
          <Dashboard />
          {isScoreModalShown && <ScoreListModal onCloseScoreModal={closeScoreHandler} />}
          </Route>
          <Route path='/profile' >
            <UserProfile />
          </Route>
          <Route path='/quiz'>
            <React.Fragment>
          <Dashboard />
          {isScoreModalShown && <ScoreListModal onCloseScoreModal={closeScoreHandler} />}
          </React.Fragment>
          </Route>
        </Switch>
      </Layout>
      </ScoreProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App