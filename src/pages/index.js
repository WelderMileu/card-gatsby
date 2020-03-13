import React from 'react';
import Container from './components/container';
import Card from './components/card';

import { GatsbySeo } from 'gatsby-plugin-next-seo';

function App(){
	return(
		<Container>
			<GatsbySeo 
				title="Site da menina"
				description="There are many variations of passages of Lorem Ipsum available, 
					  but the majority have suffered alteration in some form."
			/>
			
			<Card
				title="Julinha"
				text="There are many variations of passages of Lorem Ipsum available, 
					  but the majority have suffered alteration in some form."
			/>
		</Container>
	)
}

export default App;
