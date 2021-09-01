/* eslint-disable */
// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	const { PORT } = env;

	const source = path.resolve(__dirname, 'src');

	return {
		mode: 'development',
		entry: source,
		output: {
			path: path.resolve(__dirname, 'build'),
		},
		context: source,
		devServer: {
			contentBase: source,
			open: true,
			host: 'localhost',
			port: PORT || 3005,
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'build/index.html'),
			}),

			// Add your plugins here
			// Learn more obout plugins from https://webpack.js.org/configuration/plugins/
		],
		module: {
			rules: [
				{
					test: /\\.(ts|tsx)$/,
					loader: 'ts-loader',
					exclude: ['/node_modules/'],
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[path]-[local]',
									auto: true,
									mode: 'local',
									exportLocalsConvention: 'dashes',
								},
							},
						},
						{
							loader: 'sass-loader',
							options: {
								additionalData:
                  '@import "./src/assets/scss/variables/index.scss";',
							},
						},
					],
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
					type: 'asset',
				},
				{
					test: /\.tsx?$/,
					loader: 'babel-loader',
				},

				// Add your rules for custom modules here
				// Learn more about loaders from https://webpack.js.org/loaders/
			],
		},
		resolve: {
			alias: {
				'~': path.resolve('./src'),
			},
			extensions: ['.tsx', '.ts', '.js', '.html', '.css', '.scss'],
		},
	};
};
