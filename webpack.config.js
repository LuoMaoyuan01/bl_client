// For bundling of index.js file into a webcomponent
// npm install -g webpack webpack-cli
// Requires installation of the following loaders : 
// npm install --save-dev file-loader css-loader style-loader
// Run command npx webpack --config webpack.config.js to bundle the index.js component into the dist folder in root directory

// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,  // Add this rule to handle media files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'media/',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Optional: To handle image files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
