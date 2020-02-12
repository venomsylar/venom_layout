const path = require('path');
const glob = require('glob');
const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, './dist');

const config = {
	entry: {
		main: './development/assets/js/index.js',
	},
	output: {
		filename: 'assets/js/bundle.js?[hash]',
		path: distPath,
	},
	module: {
		rules: [{
			test: /\.html$/,
			use: 'html-loader'
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				MiniCssExtractPlugin.loader,
				{loader: 'css-loader', options: {sourceMap: true}},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						plugins: [
							isProduction ? require('cssnano') : () => {
							},
							require('autoprefixer')(),
						]
					}
				},
				{loader: 'sass-loader', options: {
					sourceMap: true
				}}
			],
		}, {
			test: /images[\\\/].+\.(gif|png|jpe?g|svg)$/i,
			exclude: /node_modules/,
			use: [{
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]?[contenthash]'
				}
			}, {
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						progressive: true,
						quality: 70
					}
				}
			},
			],
		}, {
			test: /fonts[\\\/].+\.(eot|svg|ttf|woff|woff2)$/,
			exclude: /node_modules/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[contenthash]',
					outputPath: 'assets/fonts',
					publicPath: '../../assets/fonts'
				}
			},
		}]
	},
	devtool: "source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'assets/styles/bundle.css?[contenthash]',
			chunkFilename: '[id].css'
		}),
		...glob.sync('./development/*.html')
				.map(htmlFile => {
					return new HtmlWebpackPlugin({
						filename: path.basename(htmlFile),
						template: htmlFile
					});
				}),
	],
	optimization: isProduction ? {
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					compress: {
						inline: false,
						drop_console: true
					},
				},
			}),
		],
	} : {},
	devServer: {
		contentBase: distPath,
		contentBasePublicPath: '/dist/',
		port: 9000,
		compress: true,
		open: true
	}
};

module.exports = config;