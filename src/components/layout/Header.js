import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import ScoreContext from "../../store/ScoreContext";
import classes from "./Header.module.css";

const Header = (props) => {
  const scoreCtx = useContext(ScoreContext)
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const isLoggedIn = authCtx.isLoggedIn
  const logoutHandler = () => { 
    authCtx.logout()
    history.replace('/')
   }
  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to='/'>
          <h1>Quiz App</h1>
        </Link>
        <nav>
          <ul>
            {(isLoggedIn && authCtx.user.role === 'Trainer') && <li >
              <Link to='/create_quiz' >Create quiz</Link>
            </li>}
            {isLoggedIn && <li >
              <Link to='/profile' >Profile</Link>
            </li>}
            { isLoggedIn && <li >
              <Link to='/quiz'>Quizzes</Link>
            </li>}
            {!isLoggedIn && <li >
              <Link to='/auth'>Login | Sign up</Link>
            </li>}
            {isLoggedIn && <li >
              <Link to='' onClick={logoutHandler}>Log out</Link>
            </li>}
            {isLoggedIn && <li>
              <button onClick={props.onShowScoreModal} disabled={!scoreCtx.isWrongAttemptVisible} >Wrong Attempts</button>
              {scoreCtx.isWrongAttemptVisible &&
                <span className={classes['notification_bubble']} style={{ backgroundColor: `${scoreCtx.wrongAttempts.length === 0 && '#43944b'}` }}>
                  {scoreCtx.wrongAttempts.length}
                </span>}
            </li>}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};
export default Header;
