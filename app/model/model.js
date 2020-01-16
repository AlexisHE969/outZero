'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date(); 
};

Task.createTask = function (table,newTask, result) {    
        sql.query("INSERT INTO "+ table +" set ?", newTask, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};
Task.getTaskById = function (table,taskId, result) {
        sql.query("Select "+ table +" from tasks where id = ? ", taskId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            
            }
        });   
};
Task.getAllTask = function (table,result) {
        sql.query("Select * from "+table, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('tasks : ', res);  

                result(null, res);
            }
        });   
};
Task.updateById = function(id, table, task, result){
  sql.query("UPDATE "+ table +" SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, table, result){
     sql.query("DELETE FROM "+ table +" WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
        
            result(null, res);
        }
    }); 
};

module.exports= Task;