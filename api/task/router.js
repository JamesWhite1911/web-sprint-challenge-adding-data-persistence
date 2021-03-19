const express = require('express')
const Task = require('./model')
const router = express.Router()

//get /api/tasks
router.get('/', async (req, res, next) => {
    try {
        const data = await Task.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

//post /api/tasks
router.post('/', async (req, res, next) => {
    try {
        const data = await Task.create()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})


module.exports = router
