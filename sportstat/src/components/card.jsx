import React from 'react';
import {Card, CardDeck, Container} from 'react-bootstrap';
import '../assets/styles/card.css';
import Field from '../assets/images/fields.jpg';



class SportCard extends React.Component{
	constructor(props){
		super(props)
		this.state={ loading:true, sports:null };
	}

	async componentDidMount(){
		const url = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
		const response = await fetch(url);
		const data = await response.json();

		this.setState({sports:data.sports, loading: false});
	}

	render(){
		if(this.state.loading){
			return(<div><p>LOADING.....</p></div>);
		}
		else if(!this.state.sports){
			return(<div><p>No employees</p></div>);
		}
		else {
			return(
				<div>{this.state.sports.map( s => <h3 key={s.idSport}>{s.strSport}</h3>)}</div>
			);
		}	
  }
}

export default SportCard;
