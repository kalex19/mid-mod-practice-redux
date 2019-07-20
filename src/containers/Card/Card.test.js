import { Card, mapDispatchToProps } from './Card';
import { shallow } from 'enzyme';
import { removeMusic } from '../../actions';
import React from 'react';

const mockMusic = [
	{ artist: 'Frank', song: 'Sing to me', id: 1 },
	{ artist: 'Sinatra', song: 'All night long', id: 2 },
	{ artist: 'Brittany', song: 'Toxic', id: 3 }
];

describe('Card', () => {
	let wrapper, mockRemoveMusic;

	beforeEach(() => {
		mockRemoveMusic = jest.fn();
		wrapper.shallow(<Card {...mockMusic} removeMusic={mockRemoveMusic} />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call removeMusic with id when button is clicked', () => {
		wrapper.find('#remove-btn').simulate('click');
		expect(mockRemoveMusic).toHaveBeenCalledWith(mockMusic.id);
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with the correct action', () => {
			mockDispatch = jest.fn();
			const mockId = 2;
			const mappedProps = mapDispatchToProps(mockDispatch);
			const actionToProps = removeMusic(mockId);
			mappedProps.removeMusic(mockId);
			expect(mappedProps).toHaveBeenCalledWith(actionToProps);
		});
	});
});
