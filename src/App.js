import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./firebase";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import { useStateValue } from "./state/StateProvider";
import "./style/style.css";

const promise = loadStripe(
  "pk_test_51IKg6DIig3ROA52K9fLxYTGzEKC2zwGhfQUJ5BvONgYr5p2yazYF67bRz0YRVY8Qvvk0NLe8o3vGl24QjENzt6yP00k3XqONU5"
);
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
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Order/>
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
