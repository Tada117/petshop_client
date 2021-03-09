import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./components/common/ProductDetail";
import Cart from "./components/Cart/Cart";
import BreadCrumbs from "./components/common/Breadcrumbs";

function App() {
  return (
    <Router>
      <Navbar />
      <BreadCrumbs />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/:id" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
