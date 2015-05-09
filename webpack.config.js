/* webpack.config.js */

module.exports = {
	entry: './index.jsx',
	output: {
		filename: 'public/bundle.js',
		publicPath: 'http://localhost:8090/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			}
		]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}

}