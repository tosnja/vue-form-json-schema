const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const production = {
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
  },
};

module.exports = [
  merge(common, production, {
    externals: ['vue'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.umd.js',
      libraryTarget: 'umd',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
  merge(common, production, {
    externals: ['ajv', 'vue'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.esm.js',
      libraryTarget: 'commonjs2',
      library: 'VueFormJsonSchema',
    },
  }),
];
