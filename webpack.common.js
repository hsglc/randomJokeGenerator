module.exports = {
  entry: './src/components/index.js',
 
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name:"[name].[hash:4].[ext]",
          outputPath: 'image',
          publicPath: 'image'
        },
      }
    ],
  },
}