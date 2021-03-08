import React from 'react';
import {Row,Col, Nav, Navbar,NavDropdown,Form,Button ,FormControl} from 'react-bootstrap'
import Hidden from '@material-ui/core/Hidden';
import styles from './Navbar.module.css'
const NavBar = ()=>{
    return (
        <>
        <Navbar expand="lg" className={styles.nav}>
       
        <Navbar.Brand href="#home" className="offset-lg-1 offset-md-0"  style={{color:"#fff"}} >React-Bootstrap</Navbar.Brand>
        
        <Hidden mdUp><FormControl type="text" placeholder="search" className="col-6">
            </FormControl></Hidden>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <div className="offset-lg-7">
                    <Button  className={styles.bttn}>Login</Button>
                    <Button className={styles.bttn}>Register</Button>
                </div>
            </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default NavBar;