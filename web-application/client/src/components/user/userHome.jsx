import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UserHome() {
  const {users} = useSelector((state)=> state.users)
  const navigation = useNavigate()

  useEffect(() => {
    if (users === null) {
      navigation('/userLogin')
    }
  })

  return (
    <div>
      
      <h1> this is my user home </h1>
      <h1>Your data is : {users.username}</h1>
      
    </div>
  )
}

export default UserHome
