import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import AllUser from './components/userCards/AllUsers';
import User from './components/userProfile/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {setUsers(response.data);
    });
  }, []); 

  function apiParam(value) { 
    axios.get(`https://jsonplaceholder.typicode.com/users/${value}`)
    .then((response) => {setUserDetail(response.data);
    });
  }

  return (
    <>
      <Router>
        <>
          <CssBaseline />
          <div className="appBody">
            <Navbar />
          </div>
          <Switch>
           <div className="container">
             <Route exact path="/">
                <AllUser users={users} apiParam={apiParam}/>
             </Route>
             <Route exact path="/user">
                <User singleUsers={userDetail}/>
             </Route>
           </div>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
