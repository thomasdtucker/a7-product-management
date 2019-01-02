const ngxWallabyJest = require('ngx-wallaby-jest');

module.exports = function(wallaby) {
  return {
    debug: true,
    env: {
      kind: 'electron',
      runner: 'node',
      type: 'node',
    },
    files: [
      { pattern: 'jest.config.js', load: false },
      { pattern: 'src/setupJest.ts', load: false },
      { pattern: 'src/tsconfig.spec.json', load: false },
      { pattern: 'src/app/**/*.ts', load: false },
      { pattern: 'spec-bundle-wallaby.js', load: false },
      { pattern: 'src/app/**/*.spec.ts', ignore: true },
      { pattern: 'src/app/**/*.d.ts', ignore: true },
      { pattern: 'test/**/*.ts', load: false },
      { pattern: 'tsconfig.json', load: false },
    ],
    preprocessors: {
      'src/**/*.ts': ngxWallabyJest,
    },
    setup: function(wallaby) {
      var jestConfig = require('./jest.config.js');
      // jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    },
    testFramework: 'jest',
    tests: ['src/app/**/*.spec.ts'],
  };
};
