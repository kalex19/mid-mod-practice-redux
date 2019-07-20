import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMusic } from '../../actions';

export class Card extends Component {
	render() {
		return (
			<div>
				<h2> {this.props.artist} </h2>
				<p>{this.props.song}</p>
				<button id="remove-btn" onClick={() => this.removeMusic(this.props.id)}>
					Delete Playlist Item
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	removeMusic: id => dispatch(removeMusic(id));
};

export default connect(mapDispatchToProps)(Card);
