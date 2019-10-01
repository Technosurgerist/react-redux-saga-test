const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
	return {
		entry: {
			main: ["@babel/polyfill", __dirname + "/src/index.jsx"],
		},

		output: {
			path: __dirname + "/build",
			filename: "[name].js",
		},

		module: {
			rules: [
				{
					test: /\.less$/,
					use    : [
						MiniCssExtractPlugin.loader,
						{loader:'css-loader',options:{modules:true}},
						'less-loader',
					]
				},
				{
					test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '/fonts/',
						}
					}
					]
				},
				{
					test: /\.(jpg|gif|png)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '/img/',
						}
					}
					]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						]
					}
				},
				{
					test: /\.js?$/,
					exclude: /node_modules\/ethjs-util/,
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env',
							'@babel/react',
							{
								'plugins': ['@babel/plugin-proposal-class-properties']
							}
						]
					}
				},
			],
		},

		resolve: {
			extensions: [".js", ".jsx"],
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'src/index.html',
				version: new Date().getTime(),
				// hash: true,
				inject: false,
				favicon: "src/res/img/favicon.ico",
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
			}),
			new webpack.DefinePlugin({
				"KEY_ID": JSON.stringify(env.key),
			}),
		],

		devServer: {
			contentBase: path.join(__dirname, "build"),
			port: 9000,
			historyApiFallback: true,
		}
	}
};
