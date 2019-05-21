#!/usr/bin/env node

const meow = require('meow');
const callboy = require('./index')
const { spawn } = require('child_process')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  spawn('cat', [__dirname + '/callboy.txt'], {stdio: [process.stdin, process.stdout, process.stderr]});
  console.log(`\n\n\n I'M A CALL BOY`);
  await callboy();
}

const cliInterface = meow({})
cliMode(cliInterface)
