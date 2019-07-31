const { connect } = require('./client');
let connection;

const handleUserInput = function (data) {

  if (data === "w") {
    connection.write("Move: up")
  }
  if (data === "a") {
    connection.write("Move: left")
  }
  if (data === "d") {
    connection.write("Move: right")
  }
  if (data === "s") {
    connection.write("Move: down")
  }
  if (data === '\u0003') {
    process.exit();
  }
}
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.on('data', handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = { setupInput };