import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Admin from './component/Admin/Admin';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/order'>
            <Order></Order>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <h2 style={{color: 'red'}}>404! error! something went wrong!!</h2>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
