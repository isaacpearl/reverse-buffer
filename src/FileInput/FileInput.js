import React from 'react';
import './FileInput.css';

export default class FileInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return(
			<div className="FileInput">
				Drag & Drop Files Here To Reverse :)
			</div>
		);
	}

}
