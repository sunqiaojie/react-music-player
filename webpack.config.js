var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
    	'webpack-dev-server/client?http://localhost:3000',
    	'webpack/hot/only-dev-server',
    	'react-hot-loader/patch',
    	path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		template: './index.tpl.html',
    		inject: 'body',
    		filename: './index.html'
    	}),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
    	new webpack.DefinePlugin({
    		'process.env.NODE_EVN': JSON.stringify('development')
    	})
    ],
    module: {
    	loaders: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			// loaders: ['babel?presets[]=react,presets[]=env']
    			loader: "babel-loader",
    			query: {
    				presets: ['env', 'react']
    			}
    		},
    		{
    			test: '/\.css$/',
    			loader: 'style!css'
    		},
    		{
    			test: /\.less$/,
    			loader: 'style-loader!css-loader!less-loader'
    		}
    	]
    }
}