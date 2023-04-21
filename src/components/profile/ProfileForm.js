import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const submitHandler = (event) => { 
    event.preventDefault()
    const newPassword = newPasswordInputRef.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBJljkC3Guaqt0x-MfFiMLS63-4VkxVd5I',
    {
      method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res=>{
      
      if (res.ok){
        //success case
          alert('Password changes successfully')
          //redirect to home
          history.replace('/')
      } else {
        return res.json().then(data => {
          let errorMessage = 'Password change failed'
          alert(errorMessage)
        })
      }

    })
   }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input placeholder='Enter new password' type='password' id='new-password' ref={newPasswordInputRef} required />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
