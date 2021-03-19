const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects').where({ id }).first
}

async function create(project) {
    const [project_id] = await db('projects').insert(project, ['project_id', 'project_name', 'project_description', 'project_completed'])
    return getById(project_id)
}