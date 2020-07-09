import React from 'react';
import SportCard from '../components/card';
import { shallow } from 'enzyme';


describe('SportCard', () =>{
	it('tests if component renders before componentDidMount method', () => {
		let appWrapper=shallow(<SportCard/>, { disableLifecycleMethods: true })

		expect(appWrapper.text()).toEqual('LOADING...')
	})
})