var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded' }),
	exclude: ['node_modules']
});

module.exports = {
	entry: [
		'./src/index.jsx',
	],
	output: {
		publicPath: './',
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new webpack.EnvironmentPlugin([
			"FIREBASE_KEY",
			"FIREBASE_DOMAIN",
			"FIREBASE_DATABASE",
			"FIREBASE_PROJECT_ID",
			"FIREBASE_STORAGE_BUCKET",
			"FIREBASE_SENDER_ID"
		]),
		new Dotenv(),
		new CopyWebpackPlugin([
			{ from: '_redirects' },
			{ from: 'src/favicon.ico' },
			{ from: 'robots.txt' }
		]),
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			files: {
				css: ['style.css'],
				js: ['bundle.js'],
			}
		})
	]
};
