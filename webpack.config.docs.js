/* eslint-disable */

const webpack = require('webpack')
const path = require('path')

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_DOCS = path.resolve(__dirname, 'docs')
const DIR_PUBLIC = path.resolve(__dirname, 'public')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function transformPlugin (buffer) {
  const plugin = JSON.parse(buffer.toString())
  plugin.url = 'https://ash-uncover.github.io/ap-games-tetris'
  plugin.provides['ap-games/game'].tetris.elements.main.url = '#'
  return JSON.stringify(plugin, null, 2)
}

module.exports = merge(base, {
  mode: 'production',

  output: {
    clean: true,
    path: DIR_DOCS,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      template: './src/index_docs.html',
      title: 'AP Tetris',
      publicPath: '/ap-games-tetris'
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'plugin.json'),
        to: '.',
        transform: transformPlugin
      }, {
        from: DIR_PUBLIC,
        to: '.',
      }],
    }),
    new webpack.EnvironmentPlugin({
      AP_GAMES_TETRIS_PLUGIN: 'https://ash-uncover.github.io/ap-games-tetris/plugin.json',
      AP_GAMES_TETRIS_PUBLIC: '/ap-games-tetris',
      AP_GAMES_TETRIS_ENVIRONMENT: 'github',
    }),
  ]
})
