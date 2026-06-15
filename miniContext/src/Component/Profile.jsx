import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/context'

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <h1>Please Login</h1>;
    }

    return <h1>{user.userName}</h1>;
}

export default Profile