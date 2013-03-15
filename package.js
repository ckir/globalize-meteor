Package.describe({
  summary: "Jquery Globalize repackaged for Meteor"
});

Npm.depends({
  "globalize": "0.1.1",
  "underscore.string": "2.3.1"
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
});

