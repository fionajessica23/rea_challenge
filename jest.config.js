module.exports = {
  verbose: true,
  testRegex: '(/test/unit/.*|\\.spec)\\.jsx?$',
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/scssStub.js',
  },
};
