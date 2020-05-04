import React from 'react';

function ShowName(usersName) {
	if (usersName && usersName.name)
	{
		const names = usersName.name.map((x, key)=> {
			return <h3 key={key}>{x}</h3>;
		});
		return names;
	} else {
		return <h2>NO EXISTEN NOMBRES</h2>;
	}
}

export default ShowName;