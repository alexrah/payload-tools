import payloadEsLintConfig from '@payloadcms/eslint-config'
import payloadPlugin from '@payloadcms/eslint-plugin'

export const defaultESLintIgnores = [
  '**/.temp',
  '**/.*', // ignore all dotfiles
  '**/.git',
  '**/playwright.config.ts',
  '**/jest.config.js',
  '**/tsconfig.tsbuildinfo',
  '**/README.md',
  '**/eslint.config.js',
  '**/dist/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
  'src/**/*.spec.ts',
]

/** @typedef {import('eslint').Linter.Config} Config */


/** @type {Config[]} */
export default [
  ...payloadEsLintConfig,
  {
    ignores: [
      ...defaultESLintIgnores,
    ],
  },
  {
    plugins: {
      payload: payloadPlugin,
    },
    rules: {
      'payload/no-jsx-import-statements': 'warn',
      'payload/no-relative-monorepo-imports': 'error',
      'payload/no-imports-from-exports-dir': 'error',
      'payload/no-imports-from-self': 'error',
      'payload/proper-payload-logger-usage': 'error',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },

    },
  }
]
