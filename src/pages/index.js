import React from 'react';
import Container from './components/container';
import Card from './components/card';
import Img from './assets/image.png';

function App(){
	return(
		<Container>
			<Card
				img={Img}
				title="Julinha"
				text="There are many variations of passages of Lorem Ipsum available, 
					  but the majority have suffered alteration in some form."
			/>
		</Container>
	)
}

export default App;
