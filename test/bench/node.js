require('reify');
require('@loaders.gl/polyfills');
const {Bench} = require('@probe.gl/Bench');
const {addModuleBenchmarksToSuite} = require('./modules');

const suite = new Bench({
  minIterations: 10
});

addModuleBenchmarksToSuite(suite).then(_ => suite.run());

require('./modules');
