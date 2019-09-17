import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function FriendCard(props){

    const handleRemove = () => {

        axiosWithAuth()
        .delete(`/friends/${props.friend.id}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));

         window.location.reload();
    }

    return(
        <div className='friend-card'>
            <h1>Name: {props.friend.name}</h1>
            <h2>Email: {props.friend.email}</h2>
            <h3>Age: {props.friend.age}</h3>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}