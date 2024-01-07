import React, {useContext} from 'react'
import UserContext from '../UserContext'

function Profile() {

    const {user} = useContext(UserContext)
   if(!user) return <div>please log in</div>

   return <div>Welcome {user.username}</div>
}

export default Profile