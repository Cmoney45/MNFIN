//  client.src.App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux imports
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AccountsReceivable from "./pages/AccountsReceivable";
import AccountsPayable from "./pages/AccountsPayable";
import Banking from "./pages/Banking";
import ExpenseReports from "./pages/ExpenseReports";
import GeneralLedger from "./pages/GeneralLedger";
import Reporting from "./pages/Reporting";
import Timesheet from "./pages/TimeSheets";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function UserLogout() {
    store.dispatch(logoutUser());
    window.location.href = "./Home";
}

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/logout" component={UserLogout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/accountsPayable" component={AccountsPayable} />
            <PrivateRoute exact path="/accountsReceivable" component={AccountsReceivable} />
            <PrivateRoute exact path="/banking" component={Banking} />
            <PrivateRoute exact path="/expenseReports" component={ExpenseReports} />
            <PrivateRoute exact path="/generalLedger" component={GeneralLedger} />
            <PrivateRoute exact path="/reporting" component={Reporting} />
            <PrivateRoute exact path="/timesheet" component={Timesheet} />


            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
