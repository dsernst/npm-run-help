#!/usr/bin/env node

'use strict'

var chalk = require('chalk')
var map = require('lodash.map')

console.log(chalk.underline('Usage'))
console.log('  npm run [NAME]')
console.log('')
console.log(chalk.underline('Available scripts:'))
map(require(process.cwd() + '/package.json').scripts,
  function printColorized(script, name) {
    console.log('  ' + chalk.cyan(name) + '  ' + script)
  }
)
console.log()
