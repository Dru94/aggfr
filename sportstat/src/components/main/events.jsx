import React, {useState} from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FaAngleDown, FaAngleUp, FaSearch} from 'react-icons/fa';
import '../../assets/styles/events.css';

function Events(){
	const [isShowing, setIsShowing] = useState(true)

	const handleClick = ()=>{
		setIsShowing(!isShowing)
	}

	return(
			<Container fluid>
				<Row>
					<Col md={12}>
						<h3>Upcoming Events</h3>
					</Col>
				</Row>
				<Row id='eventSrch'>
					<Col md={12}>
						<Form>
							<Form.Row>
							<Col md={3}>
								<InputGroup  size='sm'>
								    <FormControl
								      placeholder="League"
								      aria-label="SearchLeague"
								      aria-describedby="basic-addon2"
								      name='queryLeague'

								    />
								    <InputGroup.Append>
								      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
								    </InputGroup.Append>
								 </InputGroup>
							</Col>
							<Col md={3}>
								<InputGroup size='sm'>
								    <FormControl
								      placeholder="Team"
								      aria-label="SearchTeam"
								      aria-describedby="basic-addon2"
								      name='queryTeam'

								    />
								    <InputGroup.Append>
								      <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
								    </InputGroup.Append>
								 </InputGroup>
							</Col>
							</Form.Row>
					    </Form>
					</Col>
				</Row>
				<Row>
					<Col md={12} id='eventList'>
						<p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
						cuando un impresor (N. del T.</p>
					</Col>
					<Col md={12} className={isShowing ? 'moreEventListShow' : 'moreEventListHide'}>
						<p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con 
						el contenido del texto de un sitio mientras que mira su diseño.</p>
					</Col>
					<Col md={12} id='morebtn'>
						<Button id='btn' variant='outline-secondary' size='sm' onClick={handleClick}>
							{isShowing ? <FaAngleDown/> : <FaAngleUp/>}
						</Button>
					</Col>
				</Row>
			</Container>
		);
}

export default Events;