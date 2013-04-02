Package.describe({
  summary: "Jquery Globalize repackaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files('lib/globalize.js', ['client', 'server']);
  api.add_files('lib/cultures/globalize.cultures.js', 'server');
});

