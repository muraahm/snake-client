// play.js
const stdin = process.stdin;
const { connect } = require('./client');
console.log('Connecting ...');
connect();
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function (data) {

  if (data === '\u0003') {
    process.exit();
  }
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
setupInput();