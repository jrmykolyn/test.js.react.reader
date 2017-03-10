var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );


module.exports = {
    // Application entrypoint.
    entry: './src/index',
    output: {
        // Name of the 'output' file.
        filename: 'bundle.js',
        // Specify 'output' location/dir.
        path: './dist/',
        publicPath: './'
    },
    module: {
        loaders: [
            // Handle: HTML
            {
                test: /.html$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            },
            // Handle: JS
            {
                test: /\.(jsx?)$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react' ]
                }
            },
            // Handle: Styles
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader', // 'fallback' loader;
                        use: 'css-loader!sass-loader' // primary loader;
                    }
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin( 'styles.css' )
    ]
}