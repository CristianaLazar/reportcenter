var path = require('path');
const webpack = require('webpack');
module.exports = {


    entry: {
        content: path.join(__dirname, 'src', 'entry', 'content'),
        index: path.join(__dirname, 'src', 'entry', 'index'),
        admin: path.join(__dirname, 'src', 'entry', 'admin'),
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/',
    },



    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}
