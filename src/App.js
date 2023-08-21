import React from 'react';
import './App.scss';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
    return (
        <div className="App">
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        [LOGO]
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for workshop
        </div>
    );
}

export default App;
