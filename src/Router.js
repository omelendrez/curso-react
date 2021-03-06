import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/todos/Todos";
import Contactos from "./pages/contactos/Contactos";
import ContactoForm from "./pages/contactos/ContactoForm";
import Compras from "./pages/compras/Compras";
import CompraForm from "./pages/compras/CompraForm";
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
        <Route path="/compras">
          <Compras />
        </Route>

        <Route
          path="/contacto/formulario"
          render={(props) => <ContactoForm {...props} />}
        />

        <Route
          path="/compra/formulario"
          render={(props) => <CompraForm {...props} />}
        />
        <Route>
          <div>Página inexistente</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
