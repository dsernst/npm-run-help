#!/usr/bin/env node

'use strict'

var chalk = require('chalk')

console.log(chalk.underline('Usage'))
console.log('  npm run [NAME]')
console.log('')
console.log(chalk.underline('Available scripts:'))
console.log(require(process.cwd() + '/package.json').scripts)
console.log()
