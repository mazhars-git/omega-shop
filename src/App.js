import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Admin from './component/Admin/Admin';
import Login from './component/Login/Login';
import CheckOut from './component/CheckOut/CheckOut';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/order'>
            <Orders />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/product/:id'>
            <CheckOut />
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <h2 style={{color: 'red'}}>404! error! something went wrong!!</h2>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
