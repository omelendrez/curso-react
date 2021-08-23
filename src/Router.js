import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/todos/Todos";
import Contactos from "./pages/contactos/Contactos";
import ContactoForm from "./pages/contactos/ContactoForm";

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

        <Route path="/contacto/formulario">
          <ContactoForm />
        </Route>

        <Route>
          <div>Página inexistente</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
