const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		app: ['./src/index.js'],
	},
	mode: 'development', // set to production for help when ready, Make Dynamic!!!
	devtool: 'inline-source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
	},
	devServer: {
		contentBase: path.join(__dirname, '/assets/'),
		stats: { colors: true },
		historyApiFallback: true,
		disableHostCheck: true,
		// hot: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/env', '@babel/react'],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						// After all CSS loaders we use plugin to do his work.
						// It gets all transformed CSS and extracts it into separate
						// single bundled file
						loader: 'style-loader', // FOR PRODUCTION! MiniExtractPlugin.loader,
						// options: { // goes with mini-extract
						//     publicPath: path.resolve(__dirname, 'public/dist')
						// }
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('postcss-import'),
								require('tailwindcss'),
								require('postcss-preset-env')({ stage: 1 }),
								require('postcss-nested'),
								require('autoprefixer'),
							],
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
						},
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					collapseWhitespace: false,
				},
			},
		],
	},
	stats: 'errors-only',
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'ACL - Associated Clinical Labs',
			template: './assets/index.html',
			filename: './index.html',
			inject: 'body',
		}),
	],
};
