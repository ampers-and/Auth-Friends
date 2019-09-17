import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddFriendForm extends React.Component {
    
    state = {
      friend: {
        id: '',
        name: '',
        age:'',
        email:''
      }
    };
  
    handleChange = e => {
      this.setState({
        friend: {
          ...this.state.friend,
          id:Date.now(),
          [e.target.name]: e.target.value
        }
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      
      axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.friend.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              value={this.state.friend.age}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              value={this.state.friend.email}
              onChange={this.handleChange}
            />
            <button onClick={()=> window.location.reload()}>Add Friend</button>
          </form>
        </div>
      );
    }
  }
  
  export default AddFriendForm;