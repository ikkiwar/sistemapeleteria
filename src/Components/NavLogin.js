import React from 'react';
import {Navbar} from 'react-bootstrap';

class NavLogin extends React.Component{

    render(){
        return(
            <div>
                 <Navbar bg="dark" expand="lg" variant="dark" >
  <Navbar.Brand href="#home">AR Peleteria</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
</Navbar>
            </div>
        )
    }

}
export default NavLogin;