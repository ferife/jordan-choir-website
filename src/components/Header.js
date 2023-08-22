import { Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={NucampLogo} alt='nucamp logo' className="float-start" />
                <h1>Jordan Choir</h1>
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;