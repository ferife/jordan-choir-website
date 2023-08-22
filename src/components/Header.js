import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import NucampLogo from '../app/assets/img/logo.png';
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className="ms-5" href='/'>
                <img src={NucampLogo} alt='nucamp logo' className="float-start" />
                <h1 className="mt-1">Jordan Choir</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to=''>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/shop'>
                            <i className='fa fa-shopping-bag fa-lg' /> Shop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/calendar'>
                            <i className='fa fa-calendar-o fa-lg' /> Calendar
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;