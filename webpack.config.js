const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
	// 模块
	module: {
		rules: [
			{
				test: /.css/,
				use: 'css-loader'
			}
		]
	},
	// 插件
	plugins: [
		new HtmlWebpackPlugin({
			template: setPath('src/index.html')
		})
	],
	// 模式
	mode: 'production'
}

module.exports = config;