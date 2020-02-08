import React from 'react';

class HomeTitle extends React.Component {

  	render() {
    	return (
			<h2>Hello, my name is {this.props.title}</h2>
		);
	}
}

export default HomeTitle;