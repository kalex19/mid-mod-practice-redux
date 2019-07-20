import React from 'react';
import Card from '../../containers/Card/Card';
import {
	connect
} from 'react-redux';

export class Container extends Component {
	render() {
		const cards = this.props.music.map(music => {
			<
			Card {
				...this.props.music
			}
			/>;
		});
		return <div > {
			cards
		} < /div>;
	}
}

const mapStateToProps = music => {
	music: state.music;
};

export default connect(mapStateToProps)(Card);