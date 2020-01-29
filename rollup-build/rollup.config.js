import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import tsAutomapperPlugin from '@nartc/automapper-transformer-plugin'

export default {
  input: './src/index.ts',
  output: {
    dir: './dist/',
    format: 'cjs'
  },
  external: ['class-transformer', '@nartc/automapper', 'reflect-metadata'],
  preserveModules: true,
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      transformers: [service => ({
        before: [tsAutomapperPlugin(service.getProgram()).before]
      })]
    })
  ]
}
