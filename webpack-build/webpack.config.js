const path = require('path');
const tsAutomapperPlugin = require('@nartc/automapper-transformer-plugin').default;

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: program => ({
            before: [tsAutomapperPlugin(program).before]
          })
        }
      }
    ]
  }
};
