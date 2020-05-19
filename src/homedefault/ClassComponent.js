import React from 'react';
import ShowName from './ShowName';

class ClassComponent extends React.Component {

  	render() {
  		const { title, users } = this.props;

    	return (
    		<div>
	    		<header className="App-header">
					<h2>Hello, my name is {title}</h2>
				</header>
				<ShowName
					name={users}
				/>
        	</div>
		);
	}
}

export default ClassComponent;