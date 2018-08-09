const webpack = require("webpack")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        background: path.join(__dirname, "src", "background.js"),
        main: path.join(__dirname, "src", "main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [{
            test: /\.(png)$/,
            loader: "file-loader?name=[name].[ext]",
            exclude: /node_modules/
        }]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: "src/manifest.json",
            transform: function(content, path) {
                // generates the manifest file using the package.json informations
                return Buffer.from(JSON.stringify({
                    description: process.env.npm_package_description,
                    version: process.env.npm_package_version,
                    ...JSON.parse(content.toString())
                }))
            }
        }])
    ],

    mode: process.env.NODE_ENV
}