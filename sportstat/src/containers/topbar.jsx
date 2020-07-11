import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { InputGroup, Navbar, FormControl, Form, Nav } from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'
import './topbar.css';

function TopBar() {
  return (
  	<Router>
  		<Navbar bg="light" expand="lg">
		  <Navbar.Brand id='brand' href="#home">Sports Center</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav id='hnavlink' className="ml-auto">
		    	<Switch>
		    		<Nav.Link  as={Link} to='/' exact href="#home">Home</Nav.Link>
		    	</Switch>		      
		    </Nav>
		    <Form inline>
		      <InputGroup className="">
			    <FormControl
			      placeholder="Search"
			      aria-label="Search"
			      aria-describedby="basic-addon2"
			    />
			    <InputGroup.Append>
			      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
			    </InputGroup.Append>
			  </InputGroup>
		    </Form>
		  </Navbar.Collapse>
		</Navbar>
  	</Router>
    
  );
}

export default TopBar;
