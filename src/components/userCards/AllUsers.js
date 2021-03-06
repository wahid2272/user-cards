import React from 'react';
import UserItem from './UserItem';
import '../../App.css';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem'
}

const AllUsers = (props) => { 
  return (
    <div style={userStyle}>
      {props.users.map(user => (<UserItem key={user.id} user={user} apiParam={props.apiParam}/> 
          ))}
    </div> 
  );
};

export default AllUsers;
