const path = require("path");

module.exports = {
    entry: './frontend/js/index.js',
    output: {
        filename: 'index-bundle.js',
        path: path.resolve(__dirname, './static')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}