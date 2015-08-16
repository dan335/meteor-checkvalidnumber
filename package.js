Package.describe({
  name: 'danimal:checkvalidnumber',
  version: '1.0.1',
  summary: "A pattern for Meteor's check package to catch divide by zero errors.",
  git: 'https://github.com/dan335/meteor-checkvalidnumber',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('check');
  api.addFiles('checkvalidnumber.js');
  api.export(['validNumber', 'isValidNumber']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('danimal:checkvalidnumber');
  api.addFiles('checkvalidnumber-tests.js');
});
