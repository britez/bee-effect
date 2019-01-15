import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import routes from "../routes";

export default () => {
    return (
        <div className='app__content'>
            <div className='content'>
              <Header />
              <Switch>
                  { routes.map(route => <Route key={ route.path } { ...route } />)}
              </Switch>
              <div className="push"></div>
            </div>
            <Footer />
        </div>
    );
};
