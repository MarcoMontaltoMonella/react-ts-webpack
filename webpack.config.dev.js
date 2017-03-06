module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './dev/bundle.js'
    },

    // Endable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        rules:[
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /\.js$/, loader: 'source-map-loader', enforce: 'pre'
            }
        ]
    },

    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}