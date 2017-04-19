const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowerPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, "src")],
            exclude: [path.resolve(__dirname, "src/unit/handleEffectWorker.js")],
            enforce: "post",
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            }]
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader?modules", "sass-loader"]
        }, {
            test: /\.(?:png|jpg|gif)$/,
            loader: 'url-loader?limit=8192' //小于8k,内嵌;大于8k生成文件
        }, {
            test: /handleEffectWorker\.js$/,
            include: [path.resolve(__dirname, "src/unit")],
            enforce: "post",
            use: [{
                loader: "file-loader?name=[path][name].[ext]"
            }]
        }]
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".jsx", ".json", ".css", ".scss"]
    },

    devtool: "eval-source-map",

    context: __dirname,

    devServer: {
        contentBase: [path.join(__dirname, "dist")],
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    },

    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            title: 'ImageApp'
        }),
        new OpenBrowerPlugin({
            url: 'http://localhost:8080'
        })
    ]
};