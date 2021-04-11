import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import AllUser from './components/userCards/AllUsers';
import User from './components/userDetails/UserDetails';
import About from './components/about/About';
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

  async function apiParam(value) { 
    await axios.get(`https://jsonplaceholder.typicode.com/users/${value}`)
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
             <Route exact path="/about">
                <About />
             </Route>
           </div>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
