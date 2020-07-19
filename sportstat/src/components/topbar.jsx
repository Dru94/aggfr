import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import { InputGroup, Navbar, FormControl, Form, Nav } from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'
import '../assets/styles/topbar.css';

function Srch(){


	const [searchValue, setSearchValue] = useState('');
	const [team, setTeam] = useState([]);

	const handleSubmit = (event)=>{
		event.preventDefault();
		setSearchValue(event.target.query.value);
	};

	useEffect( () =>{
		if(!searchValue){
			return;
		}

		axios.post('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + searchValue)
		.then(res => {
			setTeam(res.data.teams);
		})
		.catch( err => {
			console.log(err)
		})

	}, [searchValue]);

	if(!searchValue){
		return(
			<Form inline onSubmit={handleSubmit}>
		      <InputGroup id='input' size='sm'>
			    <FormControl
			      placeholder="Search"
			      aria-label="Search"
			      aria-describedby="basic-addon2"
			      name='query'

			    />
			    <InputGroup.Append>
			      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
			    </InputGroup.Append>
			  </InputGroup>
		    </Form>

			)
	}
	else if (team == null) {
		return(
			<React.Fragment>
				<Form inline onSubmit={handleSubmit}>
			      <InputGroup id='input' size='sm'>
				    <FormControl
				      placeholder="Search"
				      aria-label="Search"
				      aria-describedby="basic-addon2"
				      name='query'

				    />
				    <InputGroup.Append>
				      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
				    </InputGroup.Append>
				  </InputGroup>
			    </Form>

				<div id='errorRes'>
				    <p>*Search Did Not Match Any Listing.</p>
				</div>			    
			</React.Fragment>
		)
	}
	else{
		return(
			<React.Fragment>
				<Form inline onSubmit={handleSubmit}>
		      <InputGroup id='input' size='sm'>
			    <FormControl
			      placeholder="Search"
			      aria-label="Search"
			      aria-describedby="basic-addon2"
			      name='query'

			    />
			    <InputGroup.Append>
			      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
			    </InputGroup.Append>
			  </InputGroup>
		    </Form>

			<div id='searchRes'>
				<ul id='searchlist'>
					{team.map( t => (<a href='#teamDetails' key={t.idTeam}><li id='teamP'>{t.strTeam}</li></a>))}
				</ul>
			    
			</div>			    
			</React.Fragment>
		)
	}
}


function TopBar() {

  return (
  	<React.Fragment>
  		<Navbar id="navbar" expand="lg">
		  <Navbar.Brand id='brand' href="#home">SportCom</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		  	<Srch/>
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
