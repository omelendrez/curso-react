import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/todos/Todos";
import Contactos from "./pages/contactos/Contactos";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/todos">
          <Todos />
        </Route>

        <Route path="/contactos">
          <Contactos />
        </Route>

        <Route>
          <div>Página inexistente</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
