import React from 'react';
import Container from './components/container';
import Card from './components/card';

function App(){
	return(
		<Container>
			<Card
				title="Julinha"
				text="There are many variations of passages of Lorem Ipsum available, 
					  but the majority have suffered alteration in some form."
			/>
		</Container>
	)
}

export default App;
