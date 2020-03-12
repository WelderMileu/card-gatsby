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
		}	
	]
}