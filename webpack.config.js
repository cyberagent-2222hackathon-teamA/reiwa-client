const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const MODE = process.env.NODE_ENV || 'development';
const DEV = process.env.NODE_ENV !== 'production';

const copyRules = [
  {
    from: path.resolve(__dirname, 'src/assets'),
    to: dist,
  },
];

module.exports = {
  mode: MODE,
  entry: src + '/index.tsx',
  devtool: 'source-map',
  devServer: {
    open: true,
    openPage: '',
    contentBase: dist,
    watchContentBase: true,
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: dist,
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  optimization: {
    minimize: !DEV,
    minimizer: DEV ? [] : [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin(copyRules),
  ],
};
