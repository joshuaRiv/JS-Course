const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /styles.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {},

    // arregla servidor no actualizando los archivos 
    devServer: { watchFiles: ["src/*.html", "src/*.css"], hot: true, },

    plugins: [
        new HtmlWebpack({
            title: 'Mi webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // fullhash ayuda a que los navegadores no mantengan el cache del archivo
            filename: '[name].css',
            ignoreOrder: false
        })
    ],
}