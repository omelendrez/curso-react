import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
