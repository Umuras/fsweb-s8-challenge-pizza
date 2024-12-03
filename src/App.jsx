import { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import OrderForm from "./pages/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/orderform">
            <OrderForm />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
