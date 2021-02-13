import { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./firebase";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useStateValue } from "./state/StateProvider";
import "./style/style.css";

function App() {
   
  
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    
    //will only run once when the app component load..
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);
      if (authUser) {
        // the user just logged / the user was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
       })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null

        })
      }
    })
   },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <Header />
    //   <Home />
    // </div>
  );
}

export default App;
