import React from 'react';
import '../../assets/styles/main.css';
import SportCard from './card';
import Jumbo from './jumbotron';
import Events from './events';

function Main(){
	return(
		<React.Fragment >
			<div id='main'>
				<Jumbo/>
				<Events/>
				<SportCard title='Football'/>
			</div>
		</React.Fragment>
		
		);
}

export default Main;