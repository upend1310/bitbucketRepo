import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import Body from "./Body";
import Country from "./Country";
import Category from "./Category";
import CountriesJSON from "../json/countries.json";
import CategoriesJSON from "../json/categories.json";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div id="header">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">News-App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/country">Country</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/category">Category</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/"  key="in" render={props => <Body paramType="country" param="in" />} />
                        <Route path="/country" component={Country} />
                        <Route path="/category" component={Category} />
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
        );
    }
}

export default Header;