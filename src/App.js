import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./components/common/ProductDetail";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/:id" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />

        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
