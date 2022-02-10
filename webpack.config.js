const path = require("path");
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    plugins: [
        new VueLoaderPlugin(),
    ],

    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                // css
                test: /\.css$/,
                use: [
                    'style-loader',
                    "css-loader",
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
