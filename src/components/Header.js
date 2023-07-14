import {Navbar, NavbarBrand} from 'reactstrap';

const Header = () => {
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <NavbarBrand className='ms-5' href="/">
                <h1 className='mt-1' style={{color: '#21d121', fontFamily: 'Stardos Stencil, cursive'}}> Circle of Images Contracting </h1>
            </NavbarBrand>
        </Navbar>
    )
};

export default Header;