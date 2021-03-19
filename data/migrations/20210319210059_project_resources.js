
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', function(project_resources){
        project_resources.increments()
    })
};

exports.down = function(knex) {
  
};

//this table links resources to projects
//i decide what columns to use