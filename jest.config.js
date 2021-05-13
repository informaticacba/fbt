/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @format
 * @noflow
 * @emails oncall+internationalization
 */

const path = require('path');
const runtimePaths = [
  '<rootDir>/runtime/shared',
  '<rootDir>/runtime/shared/FbtNumber',
  '<rootDir>/runtime/nonfb',
  '<rootDir>/runtime/nonfb/mocks',
];

const globalConfig = {
  setupFiles: ['fbjs-scripts/jest/environment.js'],
  testMatch: ['**/__tests__/**/*-test.js'],
  timers: 'fake',
  transform: {
    '\\.js$': '<rootDir>/jest-preprocessor.js',
  },
  moduleNameMapper: {
    '^FBLocaleToLang$': '<rootDir>/runtime/nonfb/FBLocaleToLang',
  },
  skipNodeResolution: true,
  testEnvironment: 'node',
};

// We need to use absolute paths in order to use this jest config from other working directories.
// See D28405950 for more info.
const toAbsolutePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  rootDir: __dirname,
  projects: [
    {
      displayName: 'babel-plugin-fbt',
      roots: ['<rootDir>/packages/babel-plugin-fbt/dist'],
      snapshotResolver:
        '<rootDir>/packages/babel-plugin-fbt/jest.snapshotResolver.js',
    },
    {
      displayName: 'babel-plugin-fbt-runtime',
      roots: ['<rootDir>/packages/babel-plugin-fbt-runtime'],
    },
    {
      displayName: 'babel-plugin-standalone',
      roots: ['<rootDir>/packages/babel-plugin-standalone'],
    },
    {
      displayName: 'fbt-runtime',
      roots: ['<rootDir>/packages/fbt/lib'],
      modulePaths: ['<rootDir>/packages/fbt/lib'],
    },
    {
      displayName: 'gulp-rewrite-flowtyped-modules',
      roots: ['<rootDir>/packages/gulp-rewrite-flowtyped-modules'],
    },
    {
      displayName: 'gulp-strip-docblock-pragmas',
      roots: ['<rootDir>/packages/gulp-strip-docblock-pragmas'],
    },
    {
      displayName: 'fb-tiger-hash',
      roots: ['<rootDir>/packages/fb-tiger-hash'],
      transform: {
        '\\.js$': [
          '<rootDir>/jest-preprocessor.js',
          {
            plugins: [
              toAbsolutePath('node_modules', '@babel/plugin-syntax-bigint'),
            ],
          },
        ],
      },
    },
    {
      displayName: 'top-level',
      roots: ['__tests__'],
    },
    {
      displayName: 'demo-app',
      setupFiles: [
        'fbjs-scripts/jest/environment.js',
        '<rootDir>/demo-app/run_all.js',
      ],
      roots: ['<rootDir>/demo-app'],
      modulePaths: [
        '<rootDir>/demo-app/src',
        '<rootDir>/demo-app/src/example',
      ].concat(runtimePaths),
      transformIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/demo-app/run_all\\.js',
      ],
      moduleNameMapper: {
        ...globalConfig.moduleNameMapper,
        '\\.(css)$': '<rootDir>/demo-app/jest/css.js',
      },
      timers: 'fake',
      transform: {
        '\\.js$': [
          '<rootDir>/jest-preprocessor.js',
          {
            plugins: [
              [
                toAbsolutePath('node_modules', 'babel-plugin-fbt'),
                {
                  fbtCommonPath: toAbsolutePath(
                    'demo-app',
                    'common_strings.json',
                  ),
                  fbtEnumPath: toAbsolutePath(
                    'demo-app',
                    '.enum_manifest.json',
                  ),
                },
              ],
              toAbsolutePath('node_modules', 'babel-plugin-fbt-runtime'),
            ],
          },
        ],
      },
    },
  ].map(project => ({...globalConfig, ...project})),
};
