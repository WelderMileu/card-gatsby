module.exports = {
	siteMetadata : {
		title:`Menininha`,
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