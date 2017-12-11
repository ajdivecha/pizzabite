var express = require ('express');
var pizza = require ('../models/pizza');

var app = express();
var router = express.Router();
var orm = require ("../config/orm.js");


// Write the routes (create, delete, etc here)
router.get("/", function(req, res){
  pizza.all(function (result){
    var data = result;
    res.render('index', { pizza: data });
  });
});


router.post('/pizza', function(req, res){
  pizza.create(req.body.toppings, function(result){
    var data = result;
    res.json({ id: data.id });
    console.log({ id: data.id});
  });
});


router.get('/pizza', function(req, res){
  pizza.all(function (result){
    var data = result;
    res.json(data);
  });
});


router.put('/pizza/:id', function(req, res){
  var id = req.params.id;
  var boo = req.body.nommed;
  console.log(id);
  pizza.update(boo, id, function(result){
    if (result.changedRows  == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.delete('/pizza/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  pizza.delete(id, function(result){
    res.status(200).end();
    }
  );
});


module.exports = router;
