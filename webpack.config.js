const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			}, {
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
				}]
			}, {
				test: /\.css$/i,
				use: ["style-loader", 
					"css-loader"
				]
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader',
				options: {
					  name: 'src/assets/banners/[name].[ext]',
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		})
	],
}