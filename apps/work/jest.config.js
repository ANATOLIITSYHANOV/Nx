module.exports = {
  name: 'work',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/work',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
