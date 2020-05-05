import React from 'react';
import Button from '@material-ui/core/Button';

class HomeTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: 'primer estado', hover: false, backgroundname: 'Cambiar background', colordefault: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log(this.state.name);
		this.setState({
			name: 'component - Did - Mount'
		});
	}

	componentWillUnmount() {
		console.log(this.state.name);
		this.setState({
			name: 'component - Will - Unmount'
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			hover
		} = this.state;
		if (hover !== prevState.hover) {
			console.log(this.state, prevState);
			this.setState({
				name: 'component - Did - Update'
			});
		}
	}

	handleClick() {
		const hexa = '#'+Math.floor(Math.random()*16777215).toString(16);;

		document.body.style.background = hexa;

		this.setState({
			backgroundname: hexa
		});
	}

  	render() {
  		const { name, backgroundname } = this.state;
  		console.log(name);
    	return (
    		<div>
			<h2>Hello, my name is {this.props.title}</h2>
			<Button variant="contained" color="primary"
				onMouseEnter={() => this.setState({ hover: !this.state.hover })}
				onMouseLeave={() => this.setState({ hover: !this.state.hover })} >
          		{this.state.name}
        	</Button>
        	<br />
        	<br />
        	<br />
        	<Button variant="contained" color="primary"
				onClick={this.handleClick}>
          		{backgroundname}
        	</Button>
        	</div>
		);
	}
}

export default HomeTitle;