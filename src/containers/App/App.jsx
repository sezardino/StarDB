import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import { routes } from "../../router";

import { app } from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
