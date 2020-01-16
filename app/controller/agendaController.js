'use strict';

var Task = require('../model/model.js/index.js');
var table_db = 'citas';
exports.list_all_tasks = function(req, res) {
  Task.getAllTask(table_db,function(err, task) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.task || !new_task.status){

    res.status(400).send({ error:true, message: 'Please provide task/status' });

  }else{
    
    Task.createTask(table_db,new_task, function(err, task) {
      if (err){
        res.send(err);
      }else{
        res.json(task);
      }
    });
    
  }
};


exports.read_a_task = function(req, res) {
  Task.getTaskById(table_db,req.params.taskId, function(err, task) {
    if (err){
      res.send(err);
    }else{
      res.json(task);
    }
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(table_db,req.params.taskId, new Task(req.body), function(err, task) {
    if (err){
      res.send(err);
    }else{
      res.json(task);
    }    
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove(table_db,req.params.taskId, function(err, task) {
    if (err){
      res.send(err);
    }else{
      res.json({ message: 'Task successfully deleted' });
    }
  });
};