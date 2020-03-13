import React from 'react';
import Button from '../../components/button';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Card = props => {
	const { imagem } = useStaticQuery(graphql`
		query {
		    imagem: file(relativePath: { eq: "image.png" }) {
		      childImageSharp {
		        fixed(width: 125, height: 125) {
		          ...GatsbyImageSharpFixed
		        }
		      }
		    }
  		}
	`);

	return (

		<div className="card">
			<div className="flex flex-col justify-center items-center lg:mr-20 mr-0 mb-10 w-full sm:w-1/2">
				<Img 
					fixed={imagem.childImageSharp.fixed} 
					className="w-32 rounded rounded-full object-cover mb-5 p-1 shadow"
					alt="menininha"
				/>
				<div>
					<p className="card-name">{props.title}</p>
					<p className="text-green-400">SEO da Empresa Criança</p>
				</div>
			</div>
			<div className="p-2 lg:p-0 lg:w-2/3">
				<div>
					<p className="text-gray-900 text-base w-full font-sans p-2">{props.text}</p>
				</div>
				<div className="flex w-full flex-col sm:flex-row">
					<Button 
						style="outline"
						content="Sign"
						bg="bg-green-400"
					/>
					<Button 
						style="outline-none"
						content="Sign Out"
					/>
				</div>
			</div>
		</div>

	);
}

export default Card;
