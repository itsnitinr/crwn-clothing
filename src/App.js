import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import RegisterLoginPage from "./pages/register-and-login/RegisterLoginPage.component";
import Header from "./components/header/Header.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={RegisterLoginPage} />
      </Switch>
    </div>
  );
};

export default App;
