const express = require('express')
const Resource = require('./model')
const router = express.Router()

//get /api/resources
router.get('/', async (req, res, next) => {
    try {
        const data = await Resource.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

//post /api/resources
router.post('/', async (req, res, next) => {
    try {
        const data = await Project.create()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router
