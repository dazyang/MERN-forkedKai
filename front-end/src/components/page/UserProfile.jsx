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

// Learning notes
// useSelector() hook takes the Redux store state and returns the pieces of state you desire.
// useDispatch() hook replaces connect()'s mapDispatchToProps. It returns your store's dispatch() method
