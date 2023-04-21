import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import Card from '../ui/Card';
import UserRole from '../users/UserRole';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import userImage from '../../images/Userimage.png'

const UserProfile = () => {
  const authCtx = useContext(AuthContext)
  const user = authCtx.user
  return (
    <Card>
      <section className={classes.profile}>
        <h2>Your Profile</h2>
        <div style={{width: "100%", border:'1px solid gray', borderRadius: '5px', padding: '10px', display:'flex', justifyContent: 'space-between', alignItems:'center' }}>
          <div>
        <img src={userImage} alt='userImage' width='80px' height='auto' />
          </div>
          <div style={{width: '215px'}}>
        <UserRole title='Username ' value={user.userName} />
        <UserRole title='Email ' value={user.email}/>
        <UserRole title='Role ' value={user.role}/>
          </div>
        </div>
        <hr />
        <div style={{width: "100%", border:'1px solid gray', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
        <h2>Change Password</h2>
        <ProfileForm />
        </div>
      </section>
    </Card>
  );
};

export default UserProfile;
