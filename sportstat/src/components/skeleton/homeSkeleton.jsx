import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Container, Row, Col} from 'react-bootstrap';

function SportSkeleton(){
	const style = {
		marginTop:'1em'
	}
	return(
		<React.Fragment>
		<Container fluid>
			<Row style={style}>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
			</Row>
			<Row style={style}>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
				<Col md={3}>
					<Skeleton variant='rect' duration={2} width={300} height={125}/>
				</Col>
			</Row>
		</Container>
		</React.Fragment>
	);
}

export default SportSkeleton;