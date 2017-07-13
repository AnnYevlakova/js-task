var path = require('path');

module.exports = {
    entry: './test.js',
    output: {
        path: path.join(__dirname, './'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json',]
    }
};
module: {
    loaders: [
        {
            test: /\.js$/,
            loader: "babel-loader"
        }
    ]
};