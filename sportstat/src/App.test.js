import React from 'react';
import App from './App';
import TopBar from './containers/topbar';
import { shallow } from 'enzyme';

describe('App',()=>{
	it('renders without crashing', ()=>{
		const appWrapper = shallow(<App/>);
	});

	it('checks for topbar', ()=>{
		const appWrapper = shallow(<App/>);
		const bar = appWrapper.find(TopBar);
		console.log(bar)

		expect(bar).toHaveLength(1);
	});

	it('checks for brand in navbar', ()=>{
		const appWrapper = shallow(<TopBar/>);

		expect(appWrapper.text()).toContain('Sports Center');
	});
})