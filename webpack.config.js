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
				// {
				// 	test: /\.(html)$/,
				// 	use: [
				// 	{
				// 		loader: 'file-loader',
				// 		options: {
				// 			name: 'index.html'
				// 		}
				// 	}
				// 	]
				// },
				{
					test: /\.less$/,
					use    : [
						MiniCssExtractPlugin.loader,
						{loader:'css-loader',options:{modules:true}},
						'less-loader',
					]
					// use: MiniCssExtractPlugin.extract({
					// 	use: [
					// 		{
					// 			loader: "css-loader",

					// 			options: {
					// 				modules: true,
					// 			},
					// 		},

					// 		{loader: "less-loader"},
					// 	],
					// }),
				},
				{
					test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							// path: __dirname + "/build",
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
							// path: __dirname + "/build",
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
					// include: /node_modules\/typeforce/,
					// include: [
					// 	'/node_modules/ethjs-util/',
					// 	'/node_modules/bitcoinjs-util/',
					// 	'/node_modules/base64-js/',
					// 	'/node_modules/ethereumjs-tx/',
					// 	'/node_modules/ethereumjs-util/',
					// 	'/node_modules/secp256k1/',
					// 	'/node_modules/keccak/',
					// 	'/node_modules/typeforce/',
					// ],
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env',
							'@babel/react',
							{
								'plugins': ['@babel/plugin-proposal-class-properties']
							}
						]
					}
					// query: {
					//  cacheDirectory: true
					// },
				},
				{
					test: /\.js?$/,
					include: [
						'/node_modules/ethjs-util/',
						'/node_modules/bitcoinjs-util/',
						'/node_modules/base64-js/',
						'/node_modules/ethereumjs-tx/',
						'/node_modules/ethereumjs-util/',
						'/node_modules/secp256k1/',
						'/node_modules/keccak/',
						'/node_modules/typeforce/',
					],
					loader: "babel-loader",
					// query: {
					//  cacheDirectory: true
					// },
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
				inject: false,
				favicon: "src/res/img/favicon.ico",
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
			}),
			new webpack.DefinePlugin({
				"API_URL": JSON.stringify(env.api),
				"KYC_URL": JSON.stringify(env.kyc),
				"PAYPAL_ID": JSON.stringify(env.paypal),
			}),
		],
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					// include: /\/excludes/,
					uglifyOptions: {
						output: {
							comments: false
						},
						mangle: false,
						// mangle: {
						// 	reserved: [
						// 		'Buffer',
						// 		'BigInteger',
						// 		'Point',
						// 		'ECPubKey',
						// 		'ECKey',
						// 		'sha512_asm',
						// 		'asm',
						// 		'ECPair',
						// 		'HDNode',
						// 	]
						// }
					}
				}),
			],
		},

		devServer: {
			contentBase: path.join(__dirname, "build"),
			port: 9000,
			historyApiFallback: true,
		}
	}
};
