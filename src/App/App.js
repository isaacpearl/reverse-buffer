import React, { Component } from 'react';
import './App.css';
import FileInput from '../FileInput/FileInput.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			context: new window.AudioContext(),
			source: null,
			processor: null,
		}
	}

	setUpDropArea() {
		var dropArea = document.getElementsByClassName("FileInput")[0];
		dropArea.addEventListener("drop", this.dropEvent);
		dropArea.addEventListener("dragover", this.dragoverEvent);
	}

	initAudio = (data) => {
		this.setState({source: this.state.context.createBufferSource()});

		this.state.context.decodeAudioData(data, (buffer) => {
			this.state.source.buffer = buffer; //if this breaks, use setState instead of mutating state directly
			this.createAudio();
			}, (e) => {
				console.log(e);
			}
		)
	}

	createAudio() {
		Array.prototype.reverse.call(this.state.source.buffer.getChannelData(0));
		Array.prototype.reverse.call(this.state.source.buffer.getChannelData(1));

		this.state.source.connect(this.state.context.destination);
		this.state.source.start(0);
	}

	dropEvent = (e) => {
		e.stopPropagation();
		e.preventDefault();
		var files = e.dataTransfer.files;
		var reader = new FileReader();
		reader.onload = (fileEvent) => {
			var data = fileEvent.target.result;
			this.initAudio(data);
		};
		reader.readAsArrayBuffer(files[0]);
	}

	dragoverEvent(e) {
		e.stopPropagation();
		e.preventDefault();
		return false;
	}

	componentDidMount() {
		this.setUpDropArea();
	}

	render() {
		return (
			<div className="App">
				<FileInput/>
			</div>
		);
	}
}

export default App;
