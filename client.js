const net = require('net');
const input = require('net');
const { setupInput }= require('./input');


/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  conn.on('connect', function () {
    console.log('Successfully connected to game server')
    setupInput(conn)
    conn.write("Name: AHM")
    
    // conn.write("Move: up")
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
  })
  conn.on('data', function (message) {
    console.log('From Server', message)
  })

  conn.setEncoding('utf8');

  return conn;
}

module.exports = { connect }