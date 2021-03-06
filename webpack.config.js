const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { 
        index: './src/index.js',
        about: './src/about/index.js',
        analitics: './src/analitics/index.js' 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            {
                                plugins: [
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        ]    
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [                    
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',                                                      
                        }  
                    },      
                    'css-loader',        
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(jpg|png|svg|gif|ico)$/i, 
                use:  [ 
                    'file-loader?name=./images/[name].[ext]',                   
                    {
                        loader: 'image-webpack-loader',
                    }
                ]    
            }    
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: './styles/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({ 
            inject: false,            
            template: './src/index.html',  
            chunks: ['index'],          
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,            
            template: './src/about.html',
            chunks: ['about'],            
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,            
            template: './src/analitics.html',  
            chunks: ['analitics'],          
            filename: 'analitics.html'
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })        
    ]
};