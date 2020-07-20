import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Container, Row, Col} from 'react-bootstrap';

function FooterSkeleton(){
	const style = {
		background: '#114c7a',
		color: '#ffff'
	}
	return(
		<React.Fragment>
		<Container fluid style={style}>

			<Row>

				<Col md={6} sm={12} xs={12}>
					<Row>
						<Col style={{textAlign:'center'}}>
							<Skeleton variant='text' width={200} height={25}/>
						</Col>	
					</Row>
					<Row>
						<Col>
							<Skeleton variant='text' count={3} />
						</Col>
					</Row>
				</Col>

				<Col md={6} sm={12} xs={12}>
					<Row>
						<Col style={{textAlign:'center'}}>
							<Skeleton variant='text' width={200} height={25}/>
						</Col>
					</Row>
					
					<Row>
						<Col md={6} sm={6} xs={6}>
							<Skeleton variant='text' count={3}/>
						</Col>
						<Col md={6} sm={6} xs={6}>
							<Skeleton variant='text' count={3}/>
						</Col>
					</Row>	
				</Col>
			</Row>
			<Row style={{background:'#11385c', textAlign:'center'}}>
				<Col md={12} sm={12} xs={12}>
					<Skeleton variant='text' width={300}/>
				</Col>
			</Row>
		</Container>
		</React.Fragment>
	);
}

export default FooterSkeleton;