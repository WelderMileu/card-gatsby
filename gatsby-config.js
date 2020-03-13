const path = require(`path`);

module.exports = {
	plugins : [
		{
			resolve : `gatsby-plugin-next-seo`,
			options : {
				openGraph : {
					type : `website`,
					locale : `pt-br`,
					url : ` https://card-gatsby.netlify.com`,
					site_name : `Site da Menina`
				}
			}
		},
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