import React from 'react';
import {Row,Col, Nav, Navbar,NavDropdown,Form,Button ,FormControl} from 'react-bootstrap'
import Hidden from '@material-ui/core/Hidden';

const NavBar = ()=>{
    return (
        <>
        <Navbar bg="light" expand="lg">
       
        <Navbar.Brand href="#home" className="offset-lg-1 offset-md-0" >React-Bootstrap</Navbar.Brand>
        
        <Hidden > </Hidden>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <div className="offset-lg-8">
                    <Button  className="mr-sm-5">Login</Button>
                    <Button className="ml-sm-5">Register</Button>
                </div>
            </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default NavBar;