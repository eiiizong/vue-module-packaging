const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 绝对路径
const setPath = dirname => {
	return path.resolve(__dirname, dirname);
}

const config = {
	// 入口文件
	entry: setPath('src/index.js'),
	// 出口文件
	output: {
		path: setPath('dist'),
		filename: 'my-index.js'
	},
	// 模式 
	// development
	// production
	mode: 'development',
	// 构建目标 默认是 web 可省略
	target: 'web',
	// 模块
	module: {
		rules: [{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
					options: {
						loaders: {
							"less": "vue-style-loader!css-loader!less-loader"
						}
					}

				}, ]
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.ts$/,
				use: [{
					loader: 'ts-loader'
				}],
				include: [
					setPath('src')
				],
				exclude: [
					setPath('node_modules')
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader'
				}],
				include: [
					setPath('src')
				],
				exclude: [
					setPath('node_modules'),
					setPath('bower_components')
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]?[hash]"
					}
				}]
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: "#eval-source-map",
	// 插件
	plugins: [
		new HtmlWebpackPlugin({
			template: setPath('src/index.html')
		}),
		new VueLoaderPlugin()
	]
}

module.exports = config;

if (process.env.NODE_ENV === "production") {
	console.log('--------production----------------')
}
