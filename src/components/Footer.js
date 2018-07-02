import React from "react";
import { Navbar, NavItem, Nav } from "reactstrap";

const Footer = () => {
    return(
        <div id="footer">
            <Navbar className="fixed-bottom" color="dark" dark expand="md">
                <Nav navbar>
                    <NavItem>
                        <div className="nav-link">Powered By News API</div>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Footer;