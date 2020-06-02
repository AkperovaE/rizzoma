const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})




