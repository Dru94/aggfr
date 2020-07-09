import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import '../assets/styles/card.css';




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
				<Container fluid>
					<Row>
						{this.state.sports.map( s => 
							<Col md={3} id='column' className='hvr-grow'>
							{/* add onclicekd to sport detail in anchor */} 	
								<a href="#soccer">
									<Card className="bg-dark text-white" key={s.idSport} id='card'>
									  <Card.Img src={s.strSportThumb} alt="Card image" />
									  <Card.ImgOverlay>
									    <Card.Title>{s.strSport}</Card.Title>
									    <Card.Text>
									      
									    </Card.Text>
									    
									  </Card.ImgOverlay>
									</Card>
								</a>
							</Col>
						)}
					</Row>
					
				</Container>
			);
		}	
  }
}

export default SportCard;
