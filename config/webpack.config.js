const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT = path.join(__dirname, '../');

const PATHS = {
  app: path.join(ROOT, 'app'),
  build: path.join(ROOT, 'build'),
};

module.exports = (env = {}) => {
  console.log('ENV:', env);

  const common = {
    entry: { // looks for entry filenames
      app: PATHS.app, // scan the content for import and require
    },
    output: { // bundles everthing to the output.path dir
      path: PATHS.build, // naming it with output.filename
      filename: '[name].build.js', // [name] replaced with entry object key
    },

    plugins: [
      new HtmlPlugin({
        template: path.join(PATHS.app, 'index.html'),
        hash: !!env.production,
      }),
      new webpack.NamedModulesPlugin(),
      new ExtractTextPlugin('[name].css'),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(env.production ? 'production' : 'development') },
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&importLoaders=2&localIdentName=[name]_[local]_[hash:base64:5]',
              'postcss-loader',
              'sass-loader',
            ],
          }),
        },
        {
          test: /\.(png|gif|jpg)$/,
          loader: 'url-loader',
          options: { limit: '25000' },
        },
        {
          test: /\.(ttf|eot|svg)$/,
          loader: 'file-loader',
        },
      ],
    },
  };

  const dev = {
    devtool: 'cheap-module-source-map',
    devServer: {
      port: 8000,
      stats: 'errors-only',
    },
  };

  if (env.dev) {
    return Object.assign({}, common, dev);
  }
  return Object.assign({}, common);
}; // end function
