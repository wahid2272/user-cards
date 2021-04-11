import React from 'react';
import { useHistory } from "react-router-dom";
import '../../App.css';

const UserItem = ({ user: { name, username, website, id }, apiParam}) => {
  let history = useHistory();
  function callTest(){
    apiParam(id);
    history.push("/user")
  }
    return (
      <div className="card text-center">
        <p className="img">{username.charAt(0)}</p>
        <h3 className="card-name">{name}</h3>
        <h6>@{username}</h6>
        <h6>{website}</h6>
      
        <div>
          <button onClick={callTest} className="btn btn-dark btn-sm my-1">More Info</button>
        </div>
      </div>
    );
  }

export default UserItem;
