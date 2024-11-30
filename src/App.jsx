import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomeBanner from "../Assets/Iteration-1-assets/home-banner.png";
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import logo from "..//Assets/Iteration-1-assets/logo.svg";
import OrderForm from "./components/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/orderform">
            <OrderForm />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
