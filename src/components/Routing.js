import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountriesJSON from "../json/countries.json";
import CategoriesJSON from "../json/categories.json";

import Country from "./Country";
import Category from "./Category";
import Body from "./Body";
import About from './About';

const Routing = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"  key="in" render={props => <Body paramType="country" param="in" />} />
                    <Route path="/country" component={Country} />
                    <Route path="/category" component={Category} />
                    <Route path="/about" component={About} />
                    {
                        CountriesJSON.map((country, index) => {
                            return (
                                <Route path={"/"+country.code}  key={country.code} render={props => <Body {...props} paramType="country" param={country.code} />} />
                            )
                        })
                    }
                    {
                        CategoriesJSON.map((category, index) => {
                            return (
                                <Route path={"/"+category}  key={category} render={props => <Body {...props} paramType="category" param={category} />} />
                            )
                        })
                    }
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;