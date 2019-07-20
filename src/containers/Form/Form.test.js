import React from 'react';
import { shallow } from 'enzyme';
import { addMusic } from '../../actions';
import { Form, mapDispatchToProps } from './Form';

describe('Form', () => {
	let wrapper, mockAddMusic;

	beforeEach(() => {
		mockAddMusic = jest.fn();
		wrapper.shallow(<Form addMusic={mockAddMusic} />);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	describe('handleChange', () => {
		it('should set state on input change', () => {
			wrapper.find('#artist-input').simulate('change', { target: { name: 'artist', value: 'new artist' } });
			wrapper.find('#song-input').simulate('change', { target: { name: 'song', value: 'new song' } });
			expect(wrapper.state()).toEqual({ artist: 'new artist', song: 'new song' });
		});
		describe('handleSubmit', () => {
			it('should call addMusic with newMusic', () => {
				Date.now = jest.fn().mockImplementation(() => 99);
				wrapper.setState({
					artist: 'new artist',
					song: 'new song'
				});
				const music = {
					id: 99,
					artist: 'Brittany',
					song: 'Toxic'
				};
				wrapper.find('form').simulate('submit', { preventDefault: () => {} });
				expect(mockAddMusic).toHaveBeenCalledWith(music);
			});
			it('should clear inputs', () => {
				wrapper.setState({ artist: 'new artist', song: 'new song' });
				wrapper.instance().handleSubmit({ preventDefault: () => {} });
				expect(wrapper.state()).toEqual({ artist: '', song: '' });
			});
		});
		describe('mapDispatchToProps', () => {
			it('should call dispatch with the correct action', () => {
				const newMusic = {
					artist: 'Brittany',
					song: 'Toxic',
					id: 101
				};
				const mockDispatch = jest.fn();
				const mappedProps = mapDispatchToProps(mockDispatch);
				const actionToDispatch = addMusic(newMusic);
				mappedProps.addMusic(newMusic);
				expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
			});
		});
	});
});
