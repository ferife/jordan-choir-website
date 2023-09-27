import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import HelmetLogo from '../app/assets/img/jordan-helmet-trans-background.png';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className="ms-5" href='/'>
                <img src={HelmetLogo} alt='helmet logo' className="float-start" />
                <h1 className="mt-1">Jordan Choir</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        {/* fixme: Why do the NavLinks by themselves not work?
                            I can't have the NavLinks and the Links at the same time. That causes issues */}
                        {/* <NavLink className="nav-link" to=''> */}
                            <Link to=''>
                                <i className='fa fa-home fa-lg' /> Home
                            </Link>
                        {/* </NavLink> */}
                    </NavItem>
                    <NavItem>
                        {/* <NavLink className="nav-link" to='/#/shop'> */}
                            <Link to='/shop'>
                                <i className='fa fa-shopping-bag fa-lg' /> Shop
                            </Link>
                        {/* </NavLink> */}
                    </NavItem>
                    <NavItem>
                        {/* <NavLink className="nav-link" to='/#/calendar'> */}
                            <Link to='/calendar'>
                                <i className='fa fa-calendar-o fa-lg' /> Calendar
                            </Link>
                        {/* </NavLink> */}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;