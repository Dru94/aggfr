import React from 'react';
import '../../assets/styles/main.css';
import SportCard from './card';
import Jumbo from './jumbotron';

function Main(){
	return(
		<React.Fragment >
			<div id='main'>
				<Jumbo/>
				<SportCard title='Football'/>
			</div>
		</React.Fragment>
		
		);
}

export default Main;