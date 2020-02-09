const path = require('path');
const tsAutoMapperPlugin = require('@nartc/automapper-transformer-plugin').default;
const tsAutoMapperPluginOptions = {
  modelFileNameSuffix: ['Model.ts', 'ViewModel.ts']
};


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
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: program => ({
            before: [tsAutoMapperPlugin(program, tsAutoMapperPluginOptions).before]
          })
        }
      }
    ]
  }
};
