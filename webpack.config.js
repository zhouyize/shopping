var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        admin: './admin/index.js',
        consumer: './consumer/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',      //
        filename: '[name].bundle.js'
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
    ],

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /images/, //[/\.jpg$/,/\.png$/],
                loader:'file-loader'
            },

            {
                test: /icons/,
                loader:'url-loader'
            },

            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    }

}