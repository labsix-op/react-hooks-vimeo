import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import type { RollupOptions } from 'rollup'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: './src/index.ts',
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
    nodeResolve(),
    json({
      include: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    postcss(),
    terser(),
  ],
}

export default config
