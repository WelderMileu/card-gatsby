const path = require(`path`);

module.exports = {
	siteMetadata : {
		title:`Menininha`,
		siteUrl: `https://card-gatsby.netlify.com/`,
		description: `Menina em um card construido com tailwindcss`,
	},

	plugins : [
		{
			resolve : `gatsby-plugin-postcss`,
			options : {
				postCssPlugins : [require("tailwindcss")],
			}
		},{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `images`,
				path : path.join(__dirname, `src`, `pages`, `images`)
			},

		},
			`gatsby-plugin-sharp`,
			`gatsby-transformer-sharp`	

	]
}