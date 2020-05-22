import React from 'react';
import Button from '@material-ui/core/Button';

class LifeCycles extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: 'primer estado', hover: false };
	}

	componentDidMount() {
		console.log('componentDidMount ', this.state.name);
		this.setState({
			name: 'component - Did - Mount'
		});
	}

	componentWillUnmount() {
		console.log('componentWillUnmount ',this.state.name);
		this.setState({
			name: 'component - Will - Unmount'
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			hover
		} = this.state;
		if (hover !== prevState.hover) {
			console.log('componentDidUpdate ',this.state, prevState);
			this.setState({
				name: 'component - Did - Update'
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate ', this.state.name, nextState.name);
		if (this.state.name !== nextState.name) {
			return true;
		}
		return false;
	}

  	render() {
  		const { name } = this.state;
  		const { title } = this.props;
  		console.log('RENDER ', name);
    	return (
    		<div>
    		<header className="App-header">
				<h2>Hello, my name is {title}</h2><br />
				<p>Mouse over the button and see your console.</p>
			</header><br />
			<Button variant="contained" color="primary"
				onMouseEnter={() => this.setState({ hover: !this.state.hover })}
				onMouseLeave={() => this.setState({ hover: this.state.hover })} >
          		{name}
        	</Button>
        	</div>
		);
	}
}

export default LifeCycles;