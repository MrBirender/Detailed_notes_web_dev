import React from 'react'
import { useParams } from 'react-router'

const Profile = () => {
 const params = useParams()
 console.log(params)
  return (
    <div>
      Profile {params.profileId}
    </div>
  )
}

export default Profile
