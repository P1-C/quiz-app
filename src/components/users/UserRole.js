import React from 'react'
import classes from './UserRole.module.css'

const UserRole = (props) => {
  return (
    <div className={classes['user-role']}>
      <div>
        <h4>{props?.title}</h4>
      </div>
      <div>
        <h5>{props?.value}</h5>
      </div>
    </div>
  )
}


export default UserRole