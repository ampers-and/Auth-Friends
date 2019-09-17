import React, { useEffect, useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';
import FriendCard from './FriendCard';

export default function FriendList(){

    const [friends, setFriends] = useState([]);

    useEffect( () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            // console.log(res.data);
            setFriends(res.data);
        })
        .catch(err => console.log(err))
    }, []);


    return(
        <div>
            <AddFriendForm />
            {friends.map( friend => <FriendCard key= {friend.id} friend={friend}/>) }  
        </div> 
    )
}