import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../assets/styles/topbar.css';
import SearchForm from './main/form.jsx';

function TopBar() {

  return (
  	<React.Fragment>
  		<Navbar id="navbar" expand="lg">
		  <Navbar.Brand id='brand' href="#home">SportCom</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		  	<SearchForm/>
		    <Nav id='nav' className="ml-auto">
			    <Nav.Link  id='hnavlink' href='/'>Home</Nav.Link>
			    <Nav.Link  id='hnavlink' href='/'>About Us</Nav.Link>
			    <Nav.Link  id='hnavlink' href='/'>Contact Us</Nav.Link>
			    <Nav.Link  id='hnavlink' href='/'>Login</Nav.Link>		      
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
  	</React.Fragment>

    
  );
}

export default TopBar;
