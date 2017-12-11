// Put your specific info to feed into controller --> orm here
var orm = require("../config/orm.js");

var pizza = {
  all: function(cb){
    orm.select('slice', function(res){
      cb(res);
    });
  },

  create: function(toppingval, cb){
    orm.insert('slice', 'toppings', toppingval, function(res){
      cb(res);
    });
  },

  update: function(nommedval, id, cb){
    orm.update('slice', 'nommed', nommedval, 'id', id, function(res){
      cb(res);
    });
  },

  delete: function(id, cb){
    orm.delete('slice', id, function(res){
      cb(res);
    });
  }
};

module.exports = pizza;
