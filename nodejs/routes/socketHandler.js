var express = require('express');
var router = express.Router();

var userArray = [];
var rollLogArray = [];

module.exports = function importIoObj(io){

  io.on('connection', function(socket){
    console.log(socket.id+' connected');

    socket.on('registerUser', function(obj){
      userArray.push({id:socket.id, name:obj});
      io.sockets.emit('userListUpdate', userArray);
      io.sockets.emit('rollLogUpdate', rollLogArray);

      console.log('msg from ' + socket.id + ': ' + obj);
    });

    socket.on('submitDiceRoll', function(obj){
      obj['time'] = new Date();
      obj['diceResult'] = rollDice(obj.noOfDice, obj.diceFace);
      obj['account'] = userArray.filter((user) => {
        return user.id == socket.id;
      })[0]['name'];

      let dicetotal = parseInt(obj['diceResult'].reduce(function (sum, value) {
        return sum + value;
      }, 0));
      obj['sum'] = parseInt(dicetotal) + parseInt(obj.adjustment);

      rollLogArray.push(obj);
      io.sockets.emit('rollLogUpdate', rollLogArray);

      console.log('Dice Roll from ' + socket.id);
      console.log(obj);
    });

    socket.on('disconnect', function () {
      userArray = userArray.filter((user)=>{
        return user.id != socket.id;
      });
      io.sockets.emit('userListUpdate', userArray);
      console.log('user disconnected');
    });
  });

}

function rollDice(noOfDice,diceFace){
  let rollResult = [];
  for(let i=0;i<noOfDice;i++){
    let result = Math.round(Math.random()*(diceFace-1)+1);
    rollResult.push(result);
  }
  return rollResult;
}
