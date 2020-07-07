import React from 'react';
import SportCard from '../components/card';
import { shallow } from 'enzyme';


describe('Sports display cards', () =>{
	
	it('renders without crashing', ()=>{
		const appWrapper = shallow(<SportCard/>);
	});
})