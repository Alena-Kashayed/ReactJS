module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }

}