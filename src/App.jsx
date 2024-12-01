import { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import OrderForm from "./components/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import Success from "./components/Success";

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
