const { Router } = require('express');

const { Link } = require('../db.js');

const router = Router();

router.get('/', async (req,res) => {
    try {
        const links = await Link.findAll();

        links.length > 0 
        ? res.status(200).json(links)
        : res.status(404).json({err: "It's empty :("})
    } catch (error) {
        res.status(400).json({err: error})
    }
});

module.exports = router;