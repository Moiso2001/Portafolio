const { Router } = require('express');

const { Work, Abilities } = require('../db.js');

const router = Router();

router.get('/', async (req,res) => {
    try {
        const work = await Work.findAll({include: Abilities});

        work.length > 0 
        ? res.status(200).json(work)
        : res.status(404).json({err: "It's empty :("});
    } catch (error) {
        res.status(400).json({err: error})
    }
});

module.exports = router;
