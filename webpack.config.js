const webpack = require("webpack")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

let version = "chrome"

module.exports = {
    entry: {
        background: path.join(__dirname, "src", "config", version, "background.js"),
        index: path.join(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|html|css)$/,
                loader: "file-loader?name=[name].[ext]",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: `src/config/${version}/manifest.json`,
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