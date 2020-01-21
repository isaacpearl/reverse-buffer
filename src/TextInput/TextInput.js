import React from 'react';
import './TextInput.css';

export default class TextInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}

	handleChange(event){

	}

	render() {
		return(
			<div className="TextInput">
				<input type="text" value={this.props.value} onInput={this.handleChange.bind(this)}></input>		
			</div>
		);
	}
}
