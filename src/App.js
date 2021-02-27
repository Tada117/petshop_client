import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import ProductDetail from "./components/common/ProductDetail";
import Cart from "./components/Cart/Cart";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/shop" exact component={Shopping} />
        <Route path="/shop/:id" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
