import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper.shallow(<App />);
	});
	it('should match snapShot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
