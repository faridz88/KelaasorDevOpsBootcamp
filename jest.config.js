module.exports = {
    testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
      }]
    ]
  };
  