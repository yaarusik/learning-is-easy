import webpack from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
return {
  mode,
  entry: paths.entry,
  output: {
    filename: "[name].[contenthash].js",
    path: paths.build,
    clean: true,
  },
  plugins: buildPlugins(options),
  module: {
    rules: buildLoaders(options),
  },
  resolve: buildResolvers(options),
  // позволяет увидеть где в коде у нас произошла ошибка, иначе всегда показывал бы на файл bundle.js
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(options) : undefined,
}
}