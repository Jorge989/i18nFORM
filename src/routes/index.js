import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import LisUser from "../pages/ListUser";
import Uniqueuser from "../pages/Uniquser";
import UpdateForm from "../pages/UpdateForm";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RegisterForm} />
        <Route path="/updateuser/:id" exact component={UpdateForm} />
        <Route path="/listuser" exact component={LisUser} />
        <Route path="/uniqueuser/:id" exact component={Uniqueuser} />
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
