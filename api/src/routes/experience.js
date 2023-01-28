const { Router } = require('express');

const { Experience } = require('../db.js');

const router = Router();

router.get('/', async(req,res) => {
   try {
    const experiences = await Experience.findAll();
    
    experiences.length > 0
    ? res.status(200).json(experiences)
    : res.status(404).json({err: "It's empty :(("});
   } catch (error) {
    res.status(400).json({err: error})
   }
})

module.exports = router;