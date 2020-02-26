import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function UserProfile() {
  const {username, scores} = useSelector(state => state.users)
  // const dispatch = useDispatch();

  return(
    <div>
    <p>
      Name: {username}
    </p>
    <p>
      Score: {scores}
    </p>
    </div>
  )
}

export default UserProfile;