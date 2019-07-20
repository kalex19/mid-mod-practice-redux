import React, { Component } from 'react';
import { addMusic } from '../../actions';
import { connect } from 'react-redux';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			artist: '',
			song: ''
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const newMusic = {
			...state,
			id: Date.now()
		};
		this.props.addMusic(newMusic);
		this.setState({
			artist: '',
			song: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="artist" value={this.state.artist} id="artist-input" onChange={this.handleChange} />
				<input type="text" name="song" value={this.state.song} id="song-input" onChange={this.handleChange} />
				<button> Submit </button>
			</form>
		);
	}
}

// const mapStateToProps = ({ artist, song }) => ({
// 	artist,
// 	song
// });

const mapDispatchToProps = dispatch => ({
	addMusic: newMusic => dispatch(addMusic(newMusic))
});

export default connect(null, mapDispatchToProps)(Form);
