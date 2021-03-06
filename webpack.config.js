// Imports: Dependencies
const path = require('path');
// Webpack Configuration
const config = {
    // Entry

    entry: './main.js',
    // Output

    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    // Loaders

    module: {
        rules : [
            // JavaScript/JSX Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS Files
            {
                test: /\.css$/,
                loaders: ["style", "css", "scss"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    // Plugins

    plugins: [],
};
// Exports
module.exports = config;