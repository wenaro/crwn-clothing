import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInUpPage from "./pages/sign-in-up/sign-in-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUpPage} />
      </Switch>{" "}
    </div>
  );
}

export default App;
