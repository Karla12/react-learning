import React from 'react';
import Button from '@material-ui/core/Button';

class HandlingEvents extends React.Component {

	constructor(props) {
		super(props);
		this.state = { backgroundname: 'Cambiar background' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const hexa = '#'+Math.floor(Math.random()*16777215).toString(16);;

		document.body.style.background = hexa;

		this.setState({
			backgroundname: hexa
		});
	}

  	render() {
  		const { backgroundname } = this.state;
  		const { title } = this.props;
 
    	return (
    		<div>
	    		<header className="App-header">
					<h2>Hello, my name is {title}</h2><br />
					<p>Click the button below.</p>
				</header><br />
        	<Button variant="contained" color="primary"
				onClick={this.handleClick}>
          		{backgroundname}
        	</Button>
        	</div>
		);
	}
}

export default HandlingEvents;