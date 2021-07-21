import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Todos">
            <Todos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
