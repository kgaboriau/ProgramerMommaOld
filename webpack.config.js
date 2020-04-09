const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {
        test: /\.pug$/,
        oneOf: [
           {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
           },
           {
              use: ['raw-loader', 'pug-plain-loader']
           }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      /* { test: /\.(gif|svg|jpg|png)$/, use: [
        { 
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            pulicPath: 'img/'
          }
        }
      ]}, */
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};
