const webpack = require("webpack")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

// build either "firefox" or the "chrome" version
let version = "chrome"

module.exports = {
    entry: {
        background: path.join(__dirname, "src", version, "background.js"),
        main: path.join(__dirname, "src", version, "main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|html)$/,
                loader: "file-loader?name=[name].[ext]",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: `src/${version}/manifest.json`,
            transform: function (content, path) {
                // generates the manifest file using the package.json informations
                return Buffer.from(JSON.stringify({
                    description: process.env.npm_package_description,
                    version: process.env.npm_package_version,
                    ...JSON.parse(content.toString())
                }))
            }
        }])
    ],

    mode: "production"
}