import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import person from '../../assets/images/carousel/person.jpg';

const style = {
	height:'27em',
	color:'#fdfcfa',
	backgroundImage : 'url(' + person + ')',
	paddingTop:'10em'
	} 

function Jumbo(){

	return(
		<Jumbotron style={style}>
		  <h1>Welcome!!!</h1>
		  <p>
		    This is a simple hero unit, a simple jumbotron-style component for calling
		    extra attention to featured content or information.
		  </p>
		  <p>
		    <Button variant="success">All Leagues</Button>
		  </p>
		</Jumbotron>
	);
}

export default Jumbo;