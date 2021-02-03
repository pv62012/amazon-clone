import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/style.css";

function App() {
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
