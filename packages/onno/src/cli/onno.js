#!/usr/bin/env node

require('yargs')
  .command(require('./onno-dev'))
  .command(require('./onno-build'))
  .command(require('./onno-start'))
  .command(require('./onno-export'))
  .command(require('./onno-serve'))
  .option('c', {
    alias: 'config',
    describe: 'Path to config file',
    default: 'onno.js',
    nargs: 1
  })
  .option('e', {
    alias: 'export',
    describe: 'Export directory',
    default: 'export',
    nargs: 1
  })
  .option('b', {
    alias: 'build',
    describe: 'Build directory',
    default: '.onno',
    nargs: 1
  })
  .option('P', {
    alias: 'port',
    describe: 'Server port',
    default: 8000,
    nargs: 1
  })
  .option('H', {
    alias: 'host',
    describe: 'Server host',
    default: 'localhost',
    nargs: 1
  })
  .alias('v', 'version')
  .alias('h', 'help')
  .version()
  .help()
  .parse(process.argv.slice(2))
