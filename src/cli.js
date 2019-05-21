#!/usr/bin/env node

const meow = require('meow');
const callboy = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true)
    await callboy()
}

const cliInterface = meow({})
cliMode(cliInterface)
