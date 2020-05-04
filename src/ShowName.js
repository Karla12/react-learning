import React from 'react';

class ShowName extends React.Component {

  	render() {
    	const { name } = this.props;
		if (name)
		{
			const names = name.map((x, key)=> {
				return <h3 key={key}>{x}</h3>;
			});
			return names;
		} else {
			return <h2>NO EXISTEN NOMBRES</h2>;
		}
	}
}

export default ShowName;