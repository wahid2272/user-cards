import React from 'react';

const User = (props) => {
  console.log(props)
  return (
    <div className="card text-center">
      {props.singleUsers ? (
        <>
          <h2>-name: {props.singleUsers.name}</h2>
          <h2>-username: {props.singleUsers.username}</h2>
          <h2>-email: {props.singleUsers.email}</h2>
          <h2>-phone: {props.singleUsers.phone}</h2>
          {/* <h2>-company: {props.singleUsers.company.name}</h2> */}
          <h2>-website: {props.singleUsers.website}</h2>
        </>
      
      ) : <h1>User not found</h1>}    
    </div>
  );
};

export default User;
