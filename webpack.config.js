module.exports = {
    entry: "main",
    output: {
        filename: ".tmp/js/index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    cacheDirectory: ".tmp/.babel-cache/",
                    presets: ["es2015", "react"],
                    plugins: ["transform-strict-mode"]
                }
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },
    resolve: {
        modulesDirectories: ["public/js", "node_modules"]
    }
};