const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const file_name = 'bundle.min.js';

module.exports = {
  entry: ['./src/index.js','./styles/index.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Bundle name
    filename: file_name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use:['style-loader','css-loader']
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => {
        const index_path = path.resolve(__dirname, 'index.html');
        try {
          // Use synchronous readFileSync instead of asynchronous readFile
          const data = fs.readFileSync(index_path, 'utf8');
          // Replace the target string
          return data.replace(
            /<link rel="stylesheet" href="\.\/styles\/index\.css">[\s\S]*?<script src="\.\/src\/index\.js" type="module"><\/script>/,
            `<script src="./${file_name}" type="module"></script>`
          );
        } catch (error) {
          console.error('Error reading file:', error);
          throw error;
        }
      },
      filename: 'index.html', // Output file name
      inject: 'body', // Inject script tag into the body
      scriptLoading: 'blocking', // Ensure script tag is loaded in the correct order
    }),

  ]
};

