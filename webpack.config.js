const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();
const file_name = process.env.OUTPUT_FILENAME || 'bundle.min.js';

module.exports = {
  entry: ['./src/index.js','./styles/index.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: file_name
  },
  experiments: {
    outputModule: true,
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
    // check if /assets folder exists
    // if it does, copy it over, otherwise do nothing
    fs.existsSync('./assets')
      ? new CopyWebpackPlugin({
          patterns: [
            { from: 'assets', to: 'assets' },
            // Add more patterns if needed for other folders or files
          ],
        })
      : // Skip CopyWebpackPlugin if /assets folder does not exist
        function () {},
  ]
};

