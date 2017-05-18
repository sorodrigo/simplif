import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from  'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { main, module, dependencies } from './package.json';

const external = Object.keys(dependencies);

export default {
  entry: 'simplif.js',
  format: 'umd',
  plugins: [
    commonjs(),
    resolve(),
    babel(babelrc())
  ],
  external: external,
  targets: [
    {
      dest: main,
      format: 'umd',
      moduleName: 'simplif',
      sourceMap: true
    },
    {
      dest: module,
      format: 'es',
      sourceMap: true
    }
  ],
  sourceMap: true
};