import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'

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
    postcss({
      include: 'node_modules/**',
    }),
    svg({
      include: 'node_modules/**',
    }),
    terser(),
  ],
}
