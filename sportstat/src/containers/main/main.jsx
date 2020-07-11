import React from 'react';
import SportCard from '../../components/card';
import Jumbo from '../../components/jumbotron';

function Main(){
	return(
		<React.Fragment>
			<Jumbo/>
			<SportCard title='Football'/>
		</React.Fragment>
		
		);
}

export default Main;