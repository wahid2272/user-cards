import React, {useEffect, useState} from 'react';
import AllUsers from '../userCards/AllUsers';
import axios from 'axios';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {setUsers(response.data);
    });
  }, []); 

  return (
    <div className="container">
      <AllUsers users={users}/>
    </div>
  );
};

export default Home;