module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react-app']
      }
    }, {
      test: /\.[a-z]{1,2}(ss)$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
        name: 'dist/[hash].[ext]'
      }
    }]
  },
  mode: 'development',
  performance: {
    hints: false
  }
};
