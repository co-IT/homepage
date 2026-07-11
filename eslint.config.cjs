const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],

        ecmaFeatures: {
          jsx: true
        }
      }
    },

    extends: compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:qwik/recommended'),

    plugins: {
      '@typescript-eslint': typescriptEslint
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn'
    }
  },
  globalIgnores([
    '**/*.log',
    '**/.DS_Store',
    '**/*.',
    '.vscode/settings.json',
    '**/.history',
    '**/.yarn',
    '**/bazel-*',
    '**/bazel-bin',
    '**/bazel-out',
    '**/bazel-qwik',
    '**/bazel-testlogs',
    '**/dist',
    '**/dist-dev',
    '**/lib',
    '**/lib-types',
    '**/etc',
    '**/external',
    '**/node_modules',
    '**/temp',
    '**/tsc-out',
    '**/tsdoc-metadata.json',
    '**/target',
    '**/output',
    '**/rollup.config.js',
    '**/build',
    '**/.cache',
    '**/.vscode',
    '**/.rollup.cache',
    '**/dist',
    '**/tsconfig.tsbuildinfo',
    '**/vite.config.ts',
    '**/*.spec.tsx',
    '**/*.spec.ts',
    '**/.netlify',
    '**/pnpm-lock.yaml',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/server'
  ])
]);
