import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import jwt_decode from 'jwt-decode';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  

    render() {
      const token = localStorage.getItem('token');

      let email = false;
      let client_id = false;
      let user_id = false;
      let dashboard_id = false;

      if(token) {
          const userInfo = jwt_decode(token);
          email = userInfo.identity.email;
          client_id = userInfo.identity.client_id;
          user_id  = userInfo.identity.user_id ;
      }

        console.log(email, client_id, user_id, dashboard_id);

        return (
            <BrowserRouter>
            <div className="App">
        
                <br />
                <Switch>
                  <Route exact path="/" component={Login} />
                  {(!token || dashboard_id || !email || !client_id || !user_id) ? 
                  <Route exact path="/" component={Login} /> :
                  <Route exact path="/dashboard" component={Dashboard} />}
</Switch>
</div>
</BrowserRouter>
        );
    }
}

export default App;