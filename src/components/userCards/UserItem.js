import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const UserItem = ({ user: { name, username, website }}) => {
    return (
      <div className="card text-center">
        <p className="img">{username.charAt(0)}</p>
        <h3 className="card-name">{name}</h3>
        <h6>@{username}</h6>
        <h6>{website}</h6>

        <div>
          <a href={website} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    );
  }

  UserItem.propTypes = {
    user: PropTypes.object.isRequired,
  }

export default UserItem;