import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
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
