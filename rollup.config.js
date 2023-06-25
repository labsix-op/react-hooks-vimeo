import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss' // Add this line
// eslint-disable-next-line import/no-extraneous-dependencies
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    json({
      include: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    postcss(),
    terser(),
  ],
}
