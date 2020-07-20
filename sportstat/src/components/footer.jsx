import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FooterSkeleton from './skeleton/footerSkeleton';
import '../assets/styles/footer.css';
import {Container, Row, Col} from 'react-bootstrap';



function Footer(){
	const [competitions, setCompetitions] = useState([])
	const [loading, setLoading] = useState([true]) 

	useEffect( () => {
		axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
		.then(res => {
			setCompetitions(res.data.leagues)
			setLoading(false)
		})
		.catch( err => {
			console.log(err)
		})
	}, [])

	if(loading){
		return(
			<FooterSkeleton/>
		);
	}
	else{
		return(
		<Container fluid id='cont'>

			<Row>

				<Col md={6}>
					<Row>
						<Col><h5 id='heading'>ABOUT</h5></Col>	
					</Row>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type 
						specimen book.
					</p>
				</Col>

				<Col md={6}>
					<Row>
						<Col><h5 id='heading'>TOP LEAGUES</h5></Col>
					</Row>
					
					<Row>
						<Col md={6}>
							<ul id='list'>
								{competitions.map( leg => (<a href="#leagueDetails" id="listlink" key={leg.idLeague}><li >{leg.strLeague}</li></a>)).slice(0,6)}
							</ul>
						</Col>
						<Col md={6}>
							<ul id='list'>
								{competitions.map( leg => (<a href="#leagueDetails" id="listlink" key={leg.idLeague}><li>{leg.strLeague}</li></a>)).slice(6,12)}
							</ul>
						</Col>
					</Row>	
				</Col>
			</Row>
			<Row id="v1">
				<Col md={12}><p>&#169; 2020 Copyright: XYZtEch Copmany Ltd</p></Col>
			</Row>
		</Container>
	);
	}
}

export default Footer;