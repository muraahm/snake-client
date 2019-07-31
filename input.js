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

module.exports = { setupInput };