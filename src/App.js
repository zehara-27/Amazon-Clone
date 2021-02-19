import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import React, { useEffect } from "react";

function App() {
   const [{}, dispatch] = useStateValue();
   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
       // console.log("THE USER IS >>> ", authUser);
       if (authUser) {
         // the user just logged in / the user was logged in

         dispatch({
           type: "SET_USER",
           user: authUser,
         });
       } else {
         // the user is logged out
         dispatch({
           type: "SET_USER",
           user: null,
         });
       }
     });
   }, []);


    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Checkout">
              <Header />s
            <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
