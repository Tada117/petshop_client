import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import ProductDetail from "./components/common/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/shop" exact component={Shopping} />
        <Route path="/shop/:id" exact component={ProductDetail} />

        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
