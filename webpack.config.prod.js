module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './dist/bundle.js'
    },

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