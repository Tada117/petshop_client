import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shopping} />
      </Switch>
    </Router>
  );
}

export default App;
