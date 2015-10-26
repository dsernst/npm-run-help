#!/usr/bin/env node

'use strict'

var chalk = require('chalk')
var map = require('lodash.map')

console.log([

  chalk.underline('Usage'),
  '  npm run [NAME]',
  '',
  chalk.underline('Available scripts:'),

  map(require(process.cwd() + '/package.json').scripts,
    function printColorized(script, name) {
      return '  ' + chalk.cyan(name) + '  ' + script
    }
  ).join('\n'),

  '',
].join('\n'))
