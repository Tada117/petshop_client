import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./components/Cart/Cart";
import BreadCrumbs from "./components/common/Breadcrumbs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Router>
        <Navbar />
        <BreadCrumbs />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/shop" exact component={ShopPage} />
          <Route
            path="/shop/products/:id"
            exact
            component={ProductDetailPage}
          />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
