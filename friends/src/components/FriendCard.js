import React from 'react';

export default function FriendCard(props){

    
    return(
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.email}</h2>
            <h3>{props.friend.age}</h3>
            <h4>{props.friend.id}</h4>
        </div>
    )
}