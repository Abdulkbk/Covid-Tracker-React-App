import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

const OutputPanel = () => {
  return (
    <Navbar bg="dark" variant="dark" className="container" expand="md" animation="false">
    	<Navbar.Brand href="#home">Trackovid</Navbar.Brand>
    	<Navbar.Toggle aria-controls="navbar-nav" />
    		<Navbar.Collapse id="navbar-nav" animation="false">
    			<Nav className="ml-auto">
    				<Nav.Link href="https://www.who.init">WHO</Nav.Link>
    				<Nav.Link href="https://ncdc.gov.ng">NCDC</Nav.Link>
    			</Nav>
    		</Navbar.Collapse>
    </Navbar>
  );
}

export default OutputPanel;