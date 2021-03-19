const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

function get() {
    return db('resources')
}

function getById(id) {
    return db('resources').where({ id }).first
}

async function create(resource) {
    const [resource_id] = await db('resources').insert(resource, ['resource_id', 'resource_name', 'resource_description'])
    return getById(resource_id)
}