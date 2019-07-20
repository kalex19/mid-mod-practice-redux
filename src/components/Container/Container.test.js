import { shallow } from 'enzyme';

const mockMusic = [
	{ artist: 'Frank', song: 'Sing to me', id: 1 },
	{ artist: 'Sinatra', song: 'All night long', id: 2 },
	{ artist: 'Brittany', song: 'Toxic', id: 3 }
];

describe('Container', () => {
	let wrapper;

	beforeEach(() => {
		wrapper.shallow(<Container music={mockMusic} />);
	});
	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	describe('mapStateToProps', () => {
		it('should return an object with music', () => {
			const mockState = { music: mockMusic };
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual({ music: mockMusic });
		});
	});
});
