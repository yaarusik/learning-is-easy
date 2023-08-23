import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // чтобы вебак умел импортировать абсолютные пути
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    // это нужно чтобы указывать, что ставить перед абсолютным импортом, например можно использовать @, либо поставить  preferAbsolute: true, указать модули и alias оставить пустыми, тогда
    // можно не указывать никаких спец символов перед импортом
    alias: {}
  }
}