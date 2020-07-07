import React from 'react';
import {Card, CardDeck, Container} from 'react-bootstrap';
import '../assets/styles/card.css';
import Girl from '../assets/images/girl.jpg';



function SportCard() {
  return (
  	<Container fluid>
  		<CardDeck id='carddeck'>
  		<Card className="bg-dark text-white">
		  	<Card.Img src={Girl} alt="Card image" />
		  		<Card.ImgOverlay>
		  			<Card.Title>Card title</Card.Title>
		  			<Card.Text>
		  				This is a wider card with supporting text below as a natural lead-in to
		  				additional content. This content is a little bit longer.
		  			</Card.Text>
		  			<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>

  		<Card className="bg-dark text-white">
		  	<Card.Img src={Girl} alt="Card image" />
		  		<Card.ImgOverlay>
		  			<Card.Title>Card title</Card.Title>
		  			<Card.Text>
		  				This is a wider card with supporting text below as a natural lead-in to
		  				additional content. This content is a little bit longer.
		  			</Card.Text>
		  			<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>

  		<Card className="bg-dark text-white">
		  	<Card.Img src={Girl} alt="Card image" />
		  		<Card.ImgOverlay>
		  			<Card.Title>Card title</Card.Title>
		  			<Card.Text>
		  				This is a wider card with supporting text below as a natural lead-in to
		  				additional content. This content is a little bit longer.
		  			</Card.Text>
		  			<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>

  		<Card className="bg-dark text-white">
		  	<Card.Img src={Girl} alt="Card image" />
		  		<Card.ImgOverlay>
		  			<Card.Title>Card title</Card.Title>
		  			<Card.Text>
		  				This is a wider card with supporting text below as a natural lead-in to
		  				additional content. This content is a little bit longer.
		  			</Card.Text>
		  			<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>						
	</CardDeck>	
  	</Container>
  	
  );
}

export default SportCard;
