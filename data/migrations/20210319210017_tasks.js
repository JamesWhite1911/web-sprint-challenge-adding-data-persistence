
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(tasks){
        tasks.increments("task_id")
    })
};

exports.down = function(knex) {
  
};

//this table holds tasks
//a task is a step needed to complete a project