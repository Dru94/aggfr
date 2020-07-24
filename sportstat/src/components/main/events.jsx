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
						<p>Oh my god i see the way u shine</p>
					</Col>
					<Col md={12} className={isShowing ? 'moreEventListShow' : 'moreEventListHide'}>
						<p>Fuck with me u know i got it</p>
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