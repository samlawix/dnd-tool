var express = require('express');
var router = express.Router();
var io;

var userArray = [];

module.exports = function importIoObj(importIo){
  this.io = importIo;
  setHandlers();
}

function setHandlers(){
  this.io.on('connection', function(socket){
    console.log(socket.id+' connected');

    socket.on('message', function(a){
      console.log('msg from '+socket.id+': '+a);
    });
  });
}
