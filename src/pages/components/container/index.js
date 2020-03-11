import React from 'react';

const Container = props => {
	return (
		<div className="min-h-screen flex justify-center items-center">
			{props.children}
		</div>
	);
}

export default Container;
