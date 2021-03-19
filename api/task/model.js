const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

function get() {
    return db('tasks')
}

function getById(id) {
    return db('tasks').where({ id }).first
}

async function create(task) {
    const [task_id] = await db('tasks').insert(task, ['task_id', 'task_description', 'task_notes', 'task_completed', 'project_id'])
    return getById(task_id)
}